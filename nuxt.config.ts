// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  ssr: true,

  modules: ["@pinia/nuxt"],

  css: ["~/assets/css/main.css"],

  app: {
    head: {
      htmlAttrs: { lang: "es" },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "CC Baron - Desarrollador Full Stack | Portfolio Profesional",
      meta: [
        {
          name: "description",
          content:
            "Portfolio profesional de Christian Baron, Growth Marketing Specialist & Desarrollador Full Stack especializado en Vue.js, React, Node.js, TypeScript y tecnologías modernas. +3 años en marketing digital y 1 año en desarrollo web.",
        },
        {
          name: "keywords",
          content:
            "desarrollador full stack, vue.js, react, node.js, typescript, portfolio, christian baron, ccbaron, growth marketing, desarrollador web, programador, javascript",
        },
        { name: "author", content: "Christian Baron" },
        { name: "robots", content: "index, follow" },
        { name: "language", content: "Spanish" },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://ccbaron.dev/" },
        {
          property: "og:title",
          content:
            "CC Baron - Desarrollador Full Stack | Portfolio Profesional",
        },
        {
          property: "og:description",
          content:
            "Portfolio profesional de Christian Baron, Growth Marketing Specialist & Desarrollador Full Stack. Especializado en Vue.js, React, Node.js y tecnologías modernas.",
        },
        {
          property: "og:image",
          content: "https://avatars.githubusercontent.com/u/196710533?v=4",
        },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:locale", content: "es_ES" },
        { property: "og:site_name", content: "CC Baron Portfolio" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:url", content: "https://ccbaron.dev/" },
        {
          name: "twitter:title",
          content:
            "CC Baron - Desarrollador Full Stack | Portfolio Profesional",
        },
        {
          name: "twitter:image",
          content: "https://avatars.githubusercontent.com/u/196710533?v=4",
        },
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
