<template>
  <div
    class="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    <!-- Background Pattern -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-blue-50 dark:from-dark-900 dark:via-dark-800 dark:to-blue-900/20"
    ></div>

    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute top-[45%] w-96 h-0.5 bg-gradient-to-r from-transparent via-primary-300/40 to-transparent"
        style="animation: moveHorizontal 8s ease-in-out infinite"
      ></div>
      <div
        class="absolute top-[62%] w-64 h-1.5 bg-gradient-to-r from-transparent via-blue-400/15 to-transparent"
        style="
          animation: moveHorizontalReverse 12s ease-in-out infinite;
          animation-delay: -4s;
        "
      ></div>
      <div
        class="absolute top-[76%] w-80 h-1.5 bg-gradient-to-r from-transparent via-indigo-300/10 to-transparent transform rotate-12"
        style="
          animation: moveHorizontal 15s ease-in-out infinite;
          animation-delay: -8s;
        "
      ></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
      <div class="text-center">
        <!-- Profile Image -->
        <div class="mb-10 animate-fade-in pt-8 md:pt-0">
          <div class="relative inline-block">
            <img
              src="https://avatars.githubusercontent.com/u/196710533?v=4"
              alt="Christian Baron"
              class="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto border-4 border-white dark:border-dark-700 shadow-xl"
            />
            <div
              class="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-blue-500 opacity-20 animate-pulse"
            ></div>
          </div>
        </div>

        <!-- Main Heading -->
        <div class="animate-slide-up" style="animation-delay: 0.2s">
          <h1
            class="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Hola, soy
            <span
              class="bg-gradient-to-r from-primary-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent"
            >
              Christian Baron
            </span>
          </h1>
        </div>

        <!-- Subtitle -->
        <div class="animate-slide-up" style="animation-delay: 0.4s">
          <div class="max-w-2xl mx-auto mt-2 mb-12 space-y-4">
            <p
              class="text-lg md:text-xl font-medium text-gray-700 dark:text-gray-200 leading-snug"
            >
              Diseño y desarrollo productos digitales con enfoque 360:
              <span class="text-primary-600 dark:text-primary-400"
                >producto, UX, conversión y escalabilidad.</span
              >
            </p>
            <p
              class="text-base text-gray-500 dark:text-gray-400 leading-relaxed"
            >
              Background en growth marketing y e-commerce, integrando
              tecnología, marketing y negocio en experiencias web y productos
              impulsados por IA.
            </p>
          </div>
        </div>

        <!-- Skills Tags -->
        <div class="animate-slide-up mb-10" style="animation-delay: 0.6s">
          <div class="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            <span
              v-for="skill in skills"
              :key="skill"
              class="px-4 py-2 bg-white/70 dark:bg-dark-800/70 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-dark-600 hover:border-primary-300 dark:hover:border-primary-600 transition-colors"
            >
              {{ skill }}
            </span>
          </div>
        </div>

        <!-- CTA Buttons -->
        <div
          class="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center"
          style="animation-delay: 0.8s"
        >
          <NuxtLink
            to="/projects"
            class="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-700 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <svg
              class="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            Ver proyectos
          </NuxtLink>

          <NuxtLink
            to="/contact"
            class="inline-flex items-center px-8 py-3 bg-white/70 dark:bg-dark-800/70 backdrop-blur-sm text-gray-700 dark:text-gray-300 font-semibold rounded-xl border border-gray-200 dark:border-dark-600 hover:bg-white dark:hover:bg-dark-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <svg
              class="w-5 h-5 mr-2"
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
            Hablemos
          </NuxtLink>
        </div>

        <!-- Scroll Indicator -->
        <div class="animate-fade-in mt-16" style="animation-delay: 1s">
          <div class="flex justify-center">
            <div class="animate-bounce">
              <svg
                class="w-6 h-6 text-gray-400 dark:text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const skills = [
  "Vue.js",
  "Nuxt",
  "TypeScript",
  "Node.js",
  "SQL",
  "MongoDB",
  "Tailwind CSS",
  "Git",
  "Figma",
  "UX/UI",
  "SEO",
  "Conversión",
];
</script>

<style>
@keyframes moveHorizontal {
  0% {
    transform: translateX(-100vw);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateX(100vw);
    opacity: 0;
  }
}
@keyframes moveHorizontalReverse {
  0% {
    transform: translateX(100vw);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateX(-100vw);
    opacity: 0;
  }
}
</style>
