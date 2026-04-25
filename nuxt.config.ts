// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  ssr: true,

  // Server-only secrets: override via NUXT_MONGODB_URI, NUXT_TELEGRAM_BOT_TOKEN, NUXT_TELEGRAM_CHAT_ID
  runtimeConfig: {
    mongodbUri: "",
    telegramBotToken: "",
    telegramChatId: "",
  },

  modules: ["@pinia/nuxt"],

  css: ["~/assets/css/main.css"],

  app: {
    head: {
      htmlAttrs: { lang: "es" },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Christian Baron — Desarrollador Full Stack & Producto Digital",
      meta: [
        {
          name: "description",
          content:
            "Portfolio de Christian Baron, desarrollador Full Stack con perfil híbrido en producto digital y growth marketing. Especializado en Vue.js, Nuxt 3, Node.js, TypeScript y MongoDB.",
        },
        {
          name: "keywords",
          content:
            "desarrollador full stack, nuxt 3, vue.js, node.js, typescript, producto digital, growth marketing, christian baron, ccbaron, portfolio, barcelona",
        },
        { name: "author", content: "Christian Baron" },
        { name: "robots", content: "index, follow" },
        { name: "language", content: "Spanish" },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://ccbaron.com/" },
        {
          property: "og:title",
          content:
            "Christian Baron — Desarrollador Full Stack & Producto Digital",
        },
        {
          property: "og:description",
          content:
            "Portfolio de Christian Baron, desarrollador Full Stack con perfil híbrido en producto digital y growth marketing. Especializado en Vue.js, Nuxt 3, Node.js, TypeScript y MongoDB.",
        },
        {
          property: "og:image",
          content: "https://avatars.githubusercontent.com/u/196710533?v=4",
        },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:locale", content: "es_ES" },
        { property: "og:site_name", content: "CC Baron Portfolio" },
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
        },
      ],
      // Runs before first paint: applies 'dark' class from localStorage or
      // system preference to prevent flash of unstyled content in SSR.
      script: [
        {
          innerHTML: `try{var s=localStorage.getItem('theme'),p=window.matchMedia('(prefers-color-scheme: dark)').matches;if(s==='dark'||(s===null&&p)){document.documentElement.classList.add('dark')}}catch(e){}`,
          tagPosition: "head",
        },
      ],
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: "2025-04-11",
});
