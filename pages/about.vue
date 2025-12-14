<template>
  <div class="py-20 bg-white dark:bg-dark-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Acerca de Mí
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Desarrollador con background en producto, marketing digital y negocio
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div>
          <div class="prose prose-lg dark:prose-invert">
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              Vengo del mundo del marketing digital y el e-commerce, donde
              trabajé en estrategias de crecimiento, optimización de conversión
              y experiencia digital. Ese recorrido me dio algo que va más allá
              del código: la capacidad de entender el negocio, al usuario y los
              objetivos antes de tomar cualquier decisión técnica.
            </p>

            <p class="text-gray-600 dark:text-gray-300 mb-6">
              Hoy construyo productos web full stack y herramientas con IA,
              aplicando ese mismo criterio de producto y orientación a
              resultados. Me interesan especialmente los proyectos en la
              intersección de desarrollo, UX y conversión, donde la parte
              técnica y la visión de negocio se complementan en lugar de
              competir.
            </p>

            <div class="mb-8">
              <h3
                class="text-xl font-semibold text-gray-900 dark:text-white mb-4"
              >
                En qué me estoy enfocando
              </h3>
              <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                <li>
                  · Productos web full stack con Vue.js / Nuxt, Node.js y bases
                  de datos
                </li>
                <li>
                  · Integración de LLMs y APIs de IA en productos y flujos de
                  trabajo reales
                </li>
                <li>
                  · Experiencias digitales que combinan buen desarrollo con
                  criterio de UX
                </li>
                <li>
                  · Background en growth marketing, analítica y optimización de
                  conversión
                </li>
              </ul>
            </div>
          </div>

          <NuxtLink
            to="/contact"
            class="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            Hablemos
            <svg
              class="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </NuxtLink>
        </div>

        <!-- Skills Grid -->
        <div>
          <div class="grid grid-cols-2 gap-6">
            <div
              v-for="category in skillCategories"
              :key="category.name"
              class="bg-gray-50 dark:bg-dark-800 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div class="mb-4 text-primary-600 dark:text-primary-400">
                <!-- Frontend: code brackets -->
                <svg
                  v-if="category.name === 'Frontend'"
                  class="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.75"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
                <!-- Backend: database -->
                <svg
                  v-else-if="category.name === 'Backend'"
                  class="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.75"
                    d="M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                  />
                </svg>
                <!-- Producto & Growth: trending up -->
                <svg
                  v-else-if="category.name === 'Producto & Growth'"
                  class="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.75"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
                <!-- IA & Herramientas: sparkles -->
                <svg
                  v-else
                  class="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.75"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3
                class="text-lg font-semibold text-gray-900 dark:text-white mb-3"
              >
                {{ category.name }}
              </h3>
              <ul class="space-y-2">
                <li
                  v-for="skill in category.skills"
                  :key="skill"
                  class="text-sm text-gray-600 dark:text-gray-400"
                >
                  {{ skill }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const skillCategories = [
  {
    name: "Frontend",
    skills: ["Vue.js", "Nuxt", "TypeScript", "React", "Tailwind CSS"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    name: "Producto & Growth",
    skills: [
      "Growth marketing",
      "Analítica web",
      "Optimización de conversión",
      "UX thinking",
      "Figma",
    ],
  },
  {
    name: "IA & Herramientas",
    skills: ["OpenAI APIs", "Prompting", "Automatización", "Git", "GitHub"],
  },
];
</script>
