# Christian Baron — Portfolio

> Desarrollador Full Stack con perfil híbrido en producto digital y growth marketing.

[![Live](https://img.shields.io/badge/Live-ccbaron.com-blue?style=for-the-badge)](https://ccbaron.com)
[![Nuxt](https://img.shields.io/badge/Nuxt_3-00DC82?style=for-the-badge&logo=nuxt.js&logoColor=white)](https://nuxt.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## Stack

**Frontend**
- Nuxt 3 (SSR) + Vue 3 (Composition API)
- TypeScript
- Tailwind CSS 3
- Pinia

**Backend (server routes — Nitro)**
- `server/api/contact.post.ts` — formulario de contacto
- Mongoose + MongoDB Atlas — persistencia de mensajes
- Telegram Bot API — notificaciones en tiempo real

## Estructura del proyecto

```
pages/                  # Enrutado automático de Nuxt
├── index.vue           # Home / Hero
├── about.vue           # Sobre mí
├── contact.vue         # Contacto con formulario
└── projects/
    ├── index.vue       # Listado con filtros por categoría
    └── [id].vue        # Detalle de proyecto

components/
├── layout/
│   ├── NavBar.vue      # Navbar fijo con dark mode toggle
│   └── Footer.vue

server/
├── api/
│   └── contact.post.ts # POST /api/contact
├── models/
│   └── Contact.ts      # Schema Mongoose
└── utils/
    └── mongodb.ts      # Conexión singleton Mongoose

data/
└── projects.ts         # Fuente de verdad de proyectos del portfolio

layouts/
└── default.vue         # Layout compartido (NavBar + Footer)
```

## Inicio rápido

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview

# Validación de tipos
npm run type-check
```

## Variables de entorno

Copia `.env.example` a `.env` y rellena los valores:

```bash
cp .env.example .env
```

| Variable | Descripción | Requerida |
|---|---|---|
| `NUXT_MONGODB_URI` | Connection string de MongoDB Atlas | Sí (para formulario) |
| `NUXT_TELEGRAM_BOT_TOKEN` | Token del bot de Telegram (`@BotFather`) | No |
| `NUXT_TELEGRAM_CHAT_ID` | Chat ID donde llegan las notificaciones | No |
| `NUXT_PUBLIC_BASE_URL` | URL pública del sitio | No |

Las variables `NUXT_` (sin `PUBLIC`) son exclusivamente de servidor y nunca se exponen al cliente.

## Despliegue

El proyecto incluye configuración lista para:

- **Vercel** — `vercel.json` en la raíz
- **Netlify** — `netlify.toml` en la raíz

Añade las variables de entorno en el panel de tu plataforma antes de desplegar. El archivo `.env` no debe commitearse.

## Características

- **Dark / Light mode** — sin flash de contenido no estilado (anti-FOUC con script inline en `<head>`)
- **SSR activado** — `ssr: true` en `nuxt.config.ts`
- **Formulario de contacto real** — validación en frontend y backend, guardado en MongoDB, notificación a Telegram, honeypot anti-spam
- **Proyectos con filtro multi-categoría** — fuente de verdad centralizada en `data/projects.ts`
- **Páginas de detalle de proyecto** — rutas dinámicas `/projects/[id]`

---

**Christian Baron** · [ccbaron.com](https://ccbaron.com) · [linkedin.com/in/christianbaron-](https://linkedin.com/in/christianbaron-)
