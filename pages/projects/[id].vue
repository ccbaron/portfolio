<template>
  <div class="py-20 bg-gray-50 dark:bg-dark-800 min-h-screen">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Back link -->
      <NuxtLink
        to="/projects"
        class="inline-flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors mb-10"
      >
        <svg
          class="w-4 h-4 mr-1.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Volver a proyectos
      </NuxtLink>

      <!-- Color band (same gradient as the card) -->
      <div
        :class="[
          'w-full h-48 rounded-2xl mb-10 relative overflow-hidden',
          project.gradient,
        ]"
      >
        <!-- Private badge -->
        <div
          v-if="project.access === 'private'"
          class="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-gray-900/80 backdrop-blur-sm text-white text-sm font-medium rounded-full"
        >
          <svg
            class="w-4 h-4"
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
          Acceso privado
        </div>
      </div>

      <!-- Header: category + title -->
      <div class="mb-8">
        <div class="flex items-center gap-3 mb-3">
          <span
            class="text-sm font-medium text-primary-600 dark:text-primary-400 uppercase tracking-wide"
          >
            {{ project.categoryLabel }}
          </span>
          <span
            v-if="project.featured"
            class="flex items-center gap-1 text-sm text-yellow-600 dark:text-yellow-400"
          >
            <svg
              class="w-4 h-4"
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
          </span>
        </div>
        <h1
          class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
        >
          {{ project.title }}
        </h1>
      </div>

      <!-- Description -->
      <section class="mb-10">
        <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          {{ project.longDescription }}
        </p>
      </section>

      <!-- Value highlights -->
      <section class="mb-10">
        <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Puntos clave
        </h2>
        <ul class="space-y-3">
          <li
            v-for="(highlight, i) in project.highlights"
            :key="i"
            class="flex items-start gap-3"
          >
            <svg
              class="w-5 h-5 mt-0.5 shrink-0 text-primary-600 dark:text-primary-400"
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
            <span class="text-gray-600 dark:text-gray-400">{{
              highlight
            }}</span>
          </li>
        </ul>
      </section>

      <!-- Tech stack -->
      <section class="mb-10">
        <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Stack técnico
        </h2>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in project.technologies"
            :key="tech"
            class="px-3 py-1.5 bg-white dark:bg-dark-900 border border-gray-200 dark:border-dark-700 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-lg"
          >
            {{ tech }}
          </span>
        </div>
      </section>

      <!-- CTAs -->
      <section>
        <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Acceso al proyecto
        </h2>

        <!-- Public project with links -->
        <div v-if="project.access !== 'private'" class="flex flex-wrap gap-3">
          <a
            v-if="project.liveUrl"
            :href="project.liveUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
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
            Ver demo
          </a>
          <a
            v-if="project.githubUrl"
            :href="project.githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center px-6 py-3 bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors"
          >
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
            Ver código
          </a>
          <!-- No URLs yet — project not deployed -->
          <p
            v-if="!project.liveUrl && !project.githubUrl"
            class="text-sm text-gray-500 dark:text-gray-400 pt-1"
          >
            Demo y repositorio próximamente disponibles.
          </p>
        </div>

        <!-- Private project -->
        <div
          v-else
          class="bg-white dark:bg-dark-900 rounded-xl border border-gray-200 dark:border-dark-700 p-6"
        >
          <div class="flex items-start gap-4">
            <div
              class="shrink-0 w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-800 flex items-center justify-center"
            >
              <svg
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
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
            </div>
            <div>
              <p class="font-medium text-gray-900 dark:text-white mb-1">
                Acceso restringido
              </p>
              <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Este proyecto está en un repositorio privado. La demo y el
                código fuente están disponibles bajo solicitud. Si te interesa
                verlo en detalle, escríbeme.
              </p>
              <NuxtLink
                to="/contact"
                class="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
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
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Solicitar acceso
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { projects } from "~/data/projects";

const route = useRoute();

// route.params.id is the [id] segment from the URL
const id = route.params.id as string;
const project = projects.find((p) => p.id === id);

// If no project matches, render a 404
if (!project) {
  throw createError({ statusCode: 404, message: "Proyecto no encontrado" });
}

// Page title for SEO
useHead({
  title: `${project.title} — Christian Baron`,
});
</script>
