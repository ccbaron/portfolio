// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  ssr: true,

  site: {
    url: "https://ccbaron.com",
    name: "Christian Baron",
  },

  // Server-only secrets: override via NUXT_MONGODB_URI, NUXT_TELEGRAM_BOT_TOKEN, NUXT_TELEGRAM_CHAT_ID
  runtimeConfig: {
    mongodbUri: "",
    telegramBotToken: "",
    telegramChatId: "",

    public: {
      gtmId: "",
    },
  },

  modules: ["@pinia/nuxt", "nuxt-site-config", "@nuxtjs/sitemap"],

  css: ["~/assets/css/main.css"],

  app: {
    head: {
      htmlAttrs: { lang: "es" },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Christian Baron | Full Stack & Product Developer",
      meta: [
        {
          name: "description",
          content:
            "Portfolio de Christian Baron: desarrollo full stack, producto digital, conversión, escalabilidad e integración de IA.",
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
          content: "Christian Baron | Full Stack & Product Developer",
        },
        {
          property: "og:description",
          content:
            "Desarrollo productos digitales con foco en producto, conversión, escalabilidad e integración de IA.",
        },
        {
          property: "og:image",
          content: "https://ccbaron.com/og-cover-v2.png",
        },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:locale", content: "es_ES" },
        { property: "og:site_name", content: "Christian Baron" },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Christian Baron | Full Stack & Product Developer",
        },
        {
          name: "twitter:description",
          content:
            "Desarrollo productos digitales con foco en producto, conversión, escalabilidad e integración de IA.",
        },
        {
          name: "twitter:image",
          content: "https://ccbaron.com/og-cover-v2.png",
        },
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "canonical", href: "https://ccbaron.com/" },
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
