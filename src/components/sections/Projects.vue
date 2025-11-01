<template>
  <div class="py-20 bg-gray-50 dark:bg-dark-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Mis Proyectos
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Una selección de proyectos que demuestran mis habilidades y experiencia
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
              : 'bg-white dark:bg-dark-700 text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20'
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
          class="bg-white dark:bg-dark-900 rounded-xl shadow-lg hover:shadow-xl overflow-hidden group transform hover:-translate-y-2 transition-all duration-300"
        >
          <!-- Project Image -->
          <div class="aspect-video bg-gradient-to-br from-primary-100 to-blue-100 dark:from-primary-900/20 dark:to-blue-900/20 relative overflow-hidden">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

          <!-- Project Content -->
          <div class="p-6">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-medium text-primary-600 dark:text-primary-400 uppercase tracking-wide">
                {{ project.category }}
              </span>
              <div v-if="project.featured" class="text-xs text-yellow-600 dark:text-yellow-400">
                ⭐ Destacado
              </div>
            </div>

            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {{ project.title }}
            </h3>

            <p class="text-gray-600 dark:text-gray-400 mb-4">
              {{ project.description }}
            </p>

            <!-- Tech Stack -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="px-2 py-1 bg-gray-100 dark:bg-dark-800 text-xs font-medium text-gray-600 dark:text-gray-400 rounded"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Project Links -->
            <div class="flex space-x-3">
              <a
                v-if="project.liveUrl"
                :href="project.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="flex-1 inline-flex items-center justify-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
              >
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Código
              </a>
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
import { ref, computed } from 'vue'
import type { Project } from '@/types'

const activeCategory = ref('Todos')

const categories = ['Todos', 'Web', 'Full Stack', 'Mobile', 'Otros']

const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Moderno',
    description: 'Plataforma de comercio electrónico completa con panel de administración, pagos integrados y análisis en tiempo real.',
    technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&auto=format',
    liveUrl: 'https://demo-ecommerce.ccbaron.dev',
    githubUrl: 'https://github.com/ccbaron/ecommerce-demo',
    featured: true,
    category: 'fullstack'
  },
  {
    id: '2',
    title: 'Dashboard Analytics',
    description: 'Panel de control interactivo para visualización de datos empresariales con gráficos dinámicos y filtros avanzados.',
    technologies: ['React', 'TypeScript', 'D3.js', 'Python', 'FastAPI'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format',
    liveUrl: 'https://analytics-dashboard.ccbaron.dev',
    githubUrl: 'https://github.com/ccbaron/analytics-dashboard',
    featured: true,
    category: 'web'
  },
  {
    id: '3',
    title: 'App de Fitness',
    description: 'Aplicación móvil para seguimiento de ejercicios y rutinas personalizadas con integración de wearables.',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Redis'],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&auto=format',
    githubUrl: 'https://github.com/ccbaron/fitness-app',
    featured: false,
    category: 'mobile'
  },
  {
    id: '4',
    title: 'API REST Escalable',
    description: 'API RESTful robusta y escalable para gestión de usuarios, autenticación JWT y rate limiting.',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'Docker', 'AWS'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&auto=format',
    githubUrl: 'https://github.com/ccbaron/scalable-api',
    featured: false,
    category: 'fullstack'
  },
  {
    id: '5',
    title: 'Portfolio Interactivo',
    description: 'Sitio web personal con animaciones suaves, tema oscuro/claro con optimización para SEO y rendimiento.',
    technologies: ['Vue.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'Vite'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop&auto=format',
    liveUrl: 'https://ccbaron.dev',
    githubUrl: 'https://github.com/ccbaron/portfolio',
    featured: false,
    category: 'web'
  },
  {
    id: '6',
    title: 'Sistema de Chat',
    description: 'Aplicación de mensajería en tiempo real con salas, notificaciones push y historial de mensajes.',
    technologies: ['Socket.io', 'React', 'Node.js', 'MongoDB', 'PWA'],
    image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop&auto=format',
    liveUrl: 'https://chat-app.ccbaron.dev',
    githubUrl: 'https://github.com/ccbaron/realtime-chat',
    featured: false,
    category: 'web'
  }
]

const filteredProjects = computed(() => {
  if (activeCategory.value === 'Todos') {
    return projects
  }
  return projects.filter(project => {
    const categoryMap: Record<string, string> = {
      'Web': 'web',
      'Full Stack': 'fullstack',
      'Mobile': 'mobile',
      'Otros': 'other'
    }
    return project.category === categoryMap[activeCategory.value]
  })
})
</script>
