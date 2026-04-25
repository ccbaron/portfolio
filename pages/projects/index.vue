<template>
  <div class="pt-28 pb-20 bg-gray-50 dark:bg-dark-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Proyectos
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Proyectos centrados en producto digital, desarrollo full stack y
          soluciones impulsadas por IA
        </p>
      </div>

      <!-- Filter Tabs -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button
          v-for="category in categories"
          :key="category"
          @click="activeCategory = category"
          :class="[
            'px-6 py-2 rounded-full font-medium transition-colors',
            activeCategory === category
              ? 'bg-primary-600 text-white'
              : 'bg-white dark:bg-dark-700 text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20',
          ]"
        >
          {{ category }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="bg-white dark:bg-dark-900 rounded-xl shadow-lg hover:shadow-xl overflow-hidden group transform hover:-translate-y-2 transition-all duration-300 flex flex-col"
        >
          <!-- Project Image / Color Band -->
          <div
            :class="['aspect-video relative overflow-hidden', project.gradient]"
          >
            <img
              v-if="project.image"
              :src="project.image"
              :alt="project.title"
              class="absolute inset-0 w-full h-full object-cover"
            />
            <!-- Private badge -->
            <div
              v-if="project.access === 'private'"
              class="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 bg-gray-900/80 backdrop-blur-sm text-white text-xs font-medium rounded-full"
            >
              <svg
                class="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              Privado
            </div>
          </div>

          <!-- Project Content -->
          <div class="p-6 flex flex-col flex-1">
            <div class="flex items-center justify-between mb-2">
              <span
                class="text-xs font-medium text-primary-600 dark:text-primary-400 uppercase tracking-wide"
              >
                {{ project.categoryLabel }}
              </span>
              <div
                v-if="project.featured"
                class="flex items-center gap-1 text-xs text-yellow-600 dark:text-yellow-400"
              >
                <svg
                  class="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.75"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
                Destacado
              </div>
            </div>

            <!-- Title links to detail page -->
            <NuxtLink :to="`/projects/${project.id}`">
              <h3
                class="text-xl font-bold text-gray-900 dark:text-white mb-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                {{ project.title }}
              </h3>
            </NuxtLink>

            <p
              class="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed"
            >
              {{ project.description }}
            </p>

            <!-- Tech Stack -->
            <div class="flex flex-wrap gap-2 mb-5">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="px-2 py-1 bg-gray-100 dark:bg-dark-800 text-xs font-medium text-gray-600 dark:text-gray-400 rounded"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Project Links — public -->
            <div
              v-if="project.access !== 'private'"
              class="flex flex-wrap gap-3 mt-auto"
            >
              <a
                v-if="project.liveUrl"
                :href="project.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="flex-1 inline-flex items-center justify-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
              >
                <svg
                  class="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Demo
              </a>
              <a
                v-if="project.githubUrl"
                :href="project.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors"
              >
                <svg
                  class="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
                Código
              </a>
              <!-- Link to detail page -->
              <NuxtLink
                :to="`/projects/${project.id}`"
                class="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors"
              >
                Ver proyecto
                <svg
                  class="w-4 h-4 ml-1.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </NuxtLink>
            </div>

            <!-- Project Links — private -->
            <div v-else class="flex flex-wrap gap-3 mt-auto">
              <NuxtLink
                :to="`/projects/${project.id}`"
                class="flex-1 inline-flex items-center justify-center whitespace-nowrap px-4 py-2 bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors"
              >
                Ver proyecto
                <svg
                  class="w-4 h-4 ml-1.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </NuxtLink>
              <NuxtLink
                to="/contact"
                class="flex-1 inline-flex items-center justify-center whitespace-nowrap px-4 py-2 bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors"
              >
                <svg
                  class="w-4 h-4 mr-2 shrink-0"
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
                Solicitar acceso
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- No projects message -->
      <div v-if="filteredProjects.length === 0" class="text-center py-12">
        <p class="text-gray-500 dark:text-gray-400">
          No hay proyectos disponibles para esta categoría.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { projects } from "~/data/projects";

const activeCategory = ref("Todos");

const categories = ["Todos", "IA", "Full Stack", "Web"];

const filteredProjects = computed(() => {
  if (activeCategory.value === "Todos") return projects;
  const map: Record<string, "web" | "fullstack" | "ai"> = {
    IA: "ai",
    "Full Stack": "fullstack",
    Web: "web",
  };
  const key = map[activeCategory.value];
  return projects.filter((p) => p.categories.includes(key));
});
</script>
