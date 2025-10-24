<template>
  <div class="py-20 bg-white dark:bg-dark-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Acerca de Mí
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Conoce más sobre mi experiencia, habilidades y pasión por el desarrollo
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div>
          <div class="prose prose-lg dark:prose-invert">
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              Groeth Marketing Specialist & desarrollador Full Stack con más de 3 años de experiencia en el ámbito del marketing y 1 año en desarrollo web. La sinergia de estas dos disciplinas me ha permitido crear 
              aplicaciones web modernas y escalables. Me especializo en el ecosistema 
              JavaScript/TypeScript, tanto en frontend como en backend, utilizando frameworks como Vue.js, React y Node.js.
            </p>
            
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              Mi enfoque se centra en escribir código limpio, mantenible y eficiente, 
              siempre siguiendo las mejores prácticas de la industria. Disfruto trabajando 
              en equipo y contribuyendo a proyectos que generen un impacto real.
            </p>

            <div class="mb-8">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Experiencia Destacada
              </h3>
              <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• +5 proyectos web completados exitosamente</li>
                <li>• Liderazgo de equipos de desarrollo de 3 personas</li>
                <li>• Implementación de arquitecturas serverless en AWS</li>
                <li>• Optimización de rendimiento web (+40% mejora promedio)</li>
              </ul>
            </div>
          </div>

          <router-link
            to="/contact"
            class="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            Trabajemos Juntos
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </router-link>
        </div>

        <!-- Skills Grid -->
        <div>
          <div class="grid grid-cols-2 gap-6">
            <div 
              v-for="category in skillCategories" 
              :key="category.name"
              class="bg-gray-50 dark:bg-dark-800 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div class="text-2xl mb-3">{{ category.icon }}</div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
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
    name: 'Frontend',
    icon: '🎨',
    skills: ['Vue.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vite']
  },
  {
    name: 'Backend',
    icon: '⚡',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs']
  },
  {
    name: 'DevOps & Tools',
    icon: '🛠️',
    skills: ['Docker', 'AWS', 'Git', 'GitHub Actions', 'Nginx']
  },
  {
    name: 'Soft Skills',
    icon: '🤝',
    skills: ['Liderazgo', 'Comunicación', 'Trabajo en equipo', 'Resolución de problemas']
  }
]
</script>