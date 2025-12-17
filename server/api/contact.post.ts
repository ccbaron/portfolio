import { ContactModel } from "~/server/models/Contact";

const VALID_SUBJECTS = ["freelance", "job", "collaboration", "other"] as const;

const SUBJECT_LABELS: Record<string, string> = {
  freelance: "Proyecto freelance",
  job: "Oferta laboral",
  collaboration: "Colaboración",
  other: "Consulta general",
};

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  // --- Honeypot: bots fill all fields; humans never touch this one ---
  if (body?._hp) {
    return { success: true };
  }

  // --- Input extraction & trimming ---
  const name = (body?.name ?? "").trim();
  const email = (body?.email ?? "").trim().toLowerCase();
  const subject = (body?.subject ?? "").trim();
  const phone = (body?.phone ?? "").trim();
  const message = (body?.message ?? "").trim();

  // --- Backend validation ---
  if (!name || !email || !subject || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: "Todos los campos son requeridos",
    });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: "El email no es válido",
    });
  }

  if (!(VALID_SUBJECTS as readonly string[]).includes(subject)) {
    throw createError({
      statusCode: 400,
      statusMessage: "Motivo de contacto no válido",
    });
  }

  if (message.length < 10) {
    throw createError({
      statusCode: 400,
      statusMessage: "El mensaje debe tener al menos 10 caracteres",
    });
  }

  // --- Build contact document ---
  const contact = {
    name: name.slice(0, 100),
    email: email.slice(0, 200),
    subject,
    ...(phone ? { phone: phone.slice(0, 30) } : {}),
    message: message.slice(0, 2000),
  };

  // --- Persist to MongoDB ---
  await connectMongoose();
  await ContactModel.create(contact);

  // --- Telegram notification (optional — only if both vars are set) ---
  const config = useRuntimeConfig();

  if (config.telegramBotToken && config.telegramChatId) {
    const subjectEmoji: Record<string, string> = {
      freelance: "🚀",
      job: "💼",
      collaboration: "🤝",
      other: "💬",
    };
    const emoji = subjectEmoji[subject] ?? "📩";
    const phoneText = contact.phone
      ? `\n<b>Teléfono:</b> ${contact.phone}`
      : "";
    const text =
      `${emoji} <b>${SUBJECT_LABELS[subject] ?? subject}</b>\n` +
      `<b>━━━━━━━━━━━━━━━━━━</b>\n` +
      `<b>Nombre:</b> ${contact.name}\n` +
      `<b>Email:</b> ${contact.email}${phoneText}\n\n` +
      `<b>Mensaje:</b>\n${contact.message}`;

    await $fetch(
      `https://api.telegram.org/bot${config.telegramBotToken}/sendMessage`,
      {
        method: "POST",
        body: { chat_id: config.telegramChatId, text, parse_mode: "HTML" },
      },
    ).catch((err: unknown) => {
      // Telegram failure is non-fatal: the contact is already saved in MongoDB
      console.error(
        "[contact] Telegram notification failed:",
        (err as Error)?.message,
      );
    });
  }

  return { success: true };
});
