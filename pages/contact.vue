<template>
  <div class="pt-28 pb-20 bg-white dark:bg-dark-900">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h1
          class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Hablemos
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Si tienes un proyecto en mente, una idea que quieres explorar o
          simplemente quieres conectar, escríbeme directamente.
        </p>
      </div>

      <!-- Contact cards -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
        <!-- Email -->
        <a
          href="mailto:contacto@ccbaron.com"
          class="group flex flex-col items-center text-center p-8 bg-gray-50 dark:bg-dark-800 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
        >
          <div
            class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/40 transition-colors"
          >
            <svg
              class="w-6 h-6 text-primary-600 dark:text-primary-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.75"
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <p class="font-semibold text-gray-900 dark:text-white mb-1">Email</p>
          <p class="text-sm text-primary-600 dark:text-primary-400">
            contacto@ccbaron.com
          </p>
        </a>

        <!-- LinkedIn -->
        <a
          href="https://linkedin.com/in/christianbaron-/"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex flex-col items-center text-center p-8 bg-gray-50 dark:bg-dark-800 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
        >
          <div
            class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/40 transition-colors"
          >
            <svg
              class="w-6 h-6 text-primary-600 dark:text-primary-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
            </svg>
          </div>
          <p class="font-semibold text-gray-900 dark:text-white mb-1">
            LinkedIn
          </p>
          <p class="text-sm text-primary-600 dark:text-primary-400">
            linkedin.com/in/christianbaron-
          </p>
        </a>

        <!-- GitHub -->
        <a
          href="https://github.com/ccbaron"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex flex-col items-center text-center p-8 bg-gray-50 dark:bg-dark-800 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
        >
          <div
            class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/40 transition-colors"
          >
            <svg
              class="w-6 h-6 text-primary-600 dark:text-primary-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
          </div>
          <p class="font-semibold text-gray-900 dark:text-white mb-1">GitHub</p>
          <p class="text-sm text-primary-600 dark:text-primary-400">
            github.com/ccbaron
          </p>
        </a>
      </div>

      <!-- Contact form -->
      <div
        class="bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 shadow-sm mb-8 p-8"
      >
        <div class="mb-6">
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
            Envíame un mensaje
          </h2>
        </div>
        <!-- Success state -->
        <div
          v-if="status === 'success'"
          class="flex flex-col items-center text-center py-10 gap-4"
        >
          <div
            class="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center"
          >
            <svg
              class="w-7 h-7 text-green-600 dark:text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <p class="font-semibold text-gray-900 dark:text-white text-lg">
            Mensaje enviado
          </p>
          <p class="text-gray-500 dark:text-gray-400 text-sm max-w-sm">
            Tu mensaje ha sido recibido. Me pondré en contacto contigo lo antes
            posible.
          </p>
          <button
            type="button"
            class="mt-2 text-sm text-primary-600 dark:text-primary-400 hover:underline"
            @click="reset"
          >
            Enviar otro mensaje
          </button>
        </div>

        <!-- Form -->
        <form v-else novalidate class="relative" @submit.prevent="submit">
          <!-- Honeypot: bots fill all fields; humans never touch this one -->
          <div
            class="absolute -left-[9999px] -top-[9999px] overflow-hidden"
            aria-hidden="true"
          >
            <label for="_hp">No rellenar</label>
            <input
              id="_hp"
              v-model="form._hp"
              type="text"
              name="_hp"
              tabindex="-1"
              autocomplete="off"
            />
          </div>

          <!-- Row 1: Name + Email -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <!-- Name -->
            <div>
              <label
                for="contact-name"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Nombre
              </label>
              <input
                id="contact-name"
                v-model="form.name"
                type="text"
                autocomplete="name"
                placeholder="¿Cómo te llamas?"
                class="w-full px-4 py-2.5 bg-white dark:bg-dark-700 border rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition"
                :class="
                  errors.name
                    ? 'border-red-400 dark:border-red-500'
                    : 'border-gray-200 dark:border-dark-600'
                "
              />
              <p
                v-if="errors.name"
                class="text-xs text-red-600 dark:text-red-400 mt-1"
              >
                {{ errors.name }}
              </p>
            </div>

            <!-- Email -->
            <div>
              <label
                for="contact-email"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                id="contact-email"
                v-model="form.email"
                type="email"
                autocomplete="email"
                placeholder="nombre@empresa.com"
                class="w-full px-4 py-2.5 bg-white dark:bg-dark-700 border rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition"
                :class="
                  errors.email
                    ? 'border-red-400 dark:border-red-500'
                    : 'border-gray-200 dark:border-dark-600'
                "
              />
              <p
                v-if="errors.email"
                class="text-xs text-red-600 dark:text-red-400 mt-1"
              >
                {{ errors.email }}
              </p>
            </div>
          </div>

          <!-- Row 2: Subject + Phone -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <!-- Subject -->
            <div>
              <label
                for="contact-subject"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Motivo
              </label>
              <div class="relative">
                <select
                  id="contact-subject"
                  v-model="form.subject"
                  class="w-full px-4 py-2.5 bg-white dark:bg-dark-700 border rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition appearance-none pr-10 cursor-pointer"
                  :class="
                    errors.subject
                      ? 'border-red-400 dark:border-red-500'
                      : 'border-gray-200 dark:border-dark-600'
                  "
                >
                  <option value="" disabled>Selecciona un motivo</option>
                  <option value="freelance">Proyecto freelance</option>
                  <option value="job">Oferta laboral</option>
                  <option value="collaboration">Colaboración</option>
                  <option value="other">Consulta general</option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-3 flex items-center"
                >
                  <svg
                    class="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              <p
                v-if="errors.subject"
                class="text-xs text-red-600 dark:text-red-400 mt-1"
              >
                {{ errors.subject }}
              </p>
            </div>

            <!-- Phone (optional) -->
            <div>
              <label
                for="contact-phone"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Teléfono
                <span class="text-gray-400 font-normal">(opcional)</span>
              </label>
              <input
                id="contact-phone"
                v-model="form.phone"
                type="tel"
                autocomplete="tel"
                placeholder="+34 600 000 000"
                class="w-full px-4 py-2.5 bg-white dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition"
              />
            </div>
          </div>

          <!-- Row 3: Message -->
          <div class="mb-6">
            <label
              for="contact-message"
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Mensaje
            </label>
            <textarea
              id="contact-message"
              v-model="form.message"
              rows="5"
              placeholder="Cuéntame en qué puedo ayudarte. Cuanto más detalle, mejor."
              class="w-full px-4 py-2.5 bg-white dark:bg-dark-700 border rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition resize-none"
              :class="
                errors.message
                  ? 'border-red-400 dark:border-red-500'
                  : 'border-gray-200 dark:border-dark-600'
              "
            />
            <p
              v-if="errors.message"
              class="text-xs text-red-600 dark:text-red-400 mt-1"
            >
              {{ errors.message }}
            </p>
          </div>

          <!-- Error banner -->
          <p
            v-if="status === 'error'"
            class="text-sm text-red-600 dark:text-red-400 mb-4"
          >
            {{ submitError }}
          </p>

          <!-- Submit -->
          <div class="flex items-center justify-between gap-4">
            <p class="text-xs text-gray-400 dark:text-gray-500">
              Tu información no se compartirá con terceros
            </p>
            <button
              type="submit"
              :disabled="status === 'loading'"
              class="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 disabled:opacity-60 disabled:cursor-not-allowed text-white px-6 py-2.5 rounded-lg font-medium transition shrink-0"
            >
              <svg
                v-if="status === 'loading'"
                class="w-4 h-4 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                />
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                />
              </svg>
              <svg
                v-else
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {{ status === "loading" ? "Enviando…" : "Enviar mensaje" }}
            </button>
          </div>
        </form>
      </div>

      <!-- Info block -->
      <div class="bg-gray-50 dark:bg-dark-800 rounded-xl p-8 text-center">
        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <div class="flex flex-col items-center sm:items-start">
            <p class="font-semibold text-gray-900 dark:text-white mb-1">
              Ubicación
            </p>
            <p class="text-gray-500 dark:text-gray-400 text-sm">
              Barcelona, España
            </p>
          </div>
          <div
            class="hidden sm:block w-px h-10 bg-gray-200 dark:bg-dark-600"
          ></div>
          <div class="flex flex-col items-center sm:items-start">
            <p class="font-semibold text-gray-900 dark:text-white mb-1">
              Disponibilidad
            </p>
            <p class="text-gray-500 dark:text-gray-400 text-sm">
              Abierto a proyectos y colaboraciones
            </p>
          </div>
          <div
            class="hidden sm:block w-px h-10 bg-gray-200 dark:bg-dark-600"
          ></div>
          <div class="flex flex-col items-center sm:items-start">
            <p class="font-semibold text-gray-900 dark:text-white mb-1">
              Respuesta
            </p>
            <p class="text-gray-500 dark:text-gray-400 text-sm">
              Respondo en menos de 24 horas
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: "Contacto — Christian Baron" });

const VALID_SUBJECTS = ["freelance", "job", "collaboration", "other"] as const;
type Subject = (typeof VALID_SUBJECTS)[number];

interface FormState {
  name: string;
  email: string;
  subject: string;
  phone: string;
  message: string;
  _hp: string;
}

interface FormErrors {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const form = reactive<FormState>({
  name: "",
  email: "",
  subject: "",
  phone: "",
  message: "",
  _hp: "",
});
const errors = reactive<FormErrors>({
  name: "",
  email: "",
  subject: "",
  message: "",
});
const status = ref<"idle" | "loading" | "success" | "error">("idle");
const submitError = ref("");

function validate(): boolean {
  errors.name = form.name.trim() ? "" : "El nombre es requerido";
  errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
    ? ""
    : "Introduce un email válido";
  errors.subject = VALID_SUBJECTS.includes(form.subject as Subject)
    ? ""
    : "Selecciona un motivo";
  errors.message =
    form.message.trim().length >= 10
      ? ""
      : "El mensaje debe tener al menos 10 caracteres";
  return !errors.name && !errors.email && !errors.subject && !errors.message;
}

async function submit() {
  if (!validate() || status.value === "loading") return;
  status.value = "loading";
  submitError.value = "";
  try {
    await $fetch("/api/contact", {
      method: "POST",
      body: {
        name: form.name.trim(),
        email: form.email.trim(),
        subject: form.subject,
        phone: form.phone.trim(),
        message: form.message.trim(),
        _hp: form._hp,
      },
    });
    status.value = "success";
  } catch (err: unknown) {
    status.value = "error";
    submitError.value =
      (err as { data?: { statusMessage?: string } })?.data?.statusMessage ||
      "Error al enviar. Inténtalo de nuevo.";
  }
}

function reset() {
  form.name = "";
  form.email = "";
  form.subject = "";
  form.phone = "";
  form.message = "";
  form._hp = "";
  errors.name = "";
  errors.email = "";
  errors.subject = "";
  errors.message = "";
  status.value = "idle";
  submitError.value = "";
}
</script>
