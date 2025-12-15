// Single source of truth for all portfolio projects.
// Imported by both the list page (pages/projects/index.vue)
// and the detail page (pages/projects/[id].vue).

export type ProjectAccess = 'public' | 'private'
export type ProjectCategory = 'web' | 'fullstack' | 'ai'

export interface PortfolioProject {
  id: string
  title: string
  description: string      // short — shown on cards in the list
  longDescription: string  // extended — shown on the detail page
  highlights: string[]     // key value points — shown on the detail page
  technologies: string[]
  gradient: string         // Tailwind gradient classes for the color band
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  categories: ProjectCategory[]  // array to allow multi-category filtering
  categoryLabel: string          // human-readable label shown on cards
  access: ProjectAccess
  // 'public'  — shows demo + code links normally
  // 'private' — hides links, shows "Solicitar acceso" instead
}

export const projects: PortfolioProject[] = [
  {
    id: 'content-intelligence-agent',
    title: 'Content Intelligence Agent',
    description:
      'Herramienta de estrategia de contenido e investigación asistida por IA. Automatiza la identificación de oportunidades, el análisis de competencia y la estructuración de briefs editoriales, reduciendo el tiempo de investigación manual.',
    longDescription:
      'La estrategia de contenido eficaz requiere horas de investigación: analizar competencia, identificar gaps temáticos, estructurar ángulos editoriales y priorizar temas según intención de búsqueda. Content Intelligence Agent automatiza ese proceso usando la API de OpenAI para procesar señales del mercado, sintetizar hallazgos y generar briefs listos para producción. El resultado es un ciclo de research que pasa de horas a minutos, manteniendo la profundidad analítica.',
    highlights: [
      'Automatización del research de contenido vía OpenAI API',
      'Análisis de competencia y detección de gaps temáticos',
      'Generación estructurada de briefs editoriales accionables',
      'Persistencia de investigaciones en base de datos para histórico y reutilización',
    ],
    technologies: ['OpenAI API', 'Node.js', 'Vue.js', 'PostgreSQL', 'TypeScript'],
    gradient:
      'bg-gradient-to-br from-violet-100 to-indigo-100 dark:from-violet-900/20 dark:to-indigo-900/20',
    featured: true,
    categories: ['ai'],
    categoryLabel: 'IA Aplicada',
    access: 'public',
    // liveUrl: '',   // añadir cuando esté desplegado
    // githubUrl: '', // añadir cuando sea público
  },
  {
    id: 'leadflow-ai',
    title: 'Leadflow AI',
    description:
      'Plataforma de captación, scoring y priorización de leads mediante automatización e IA. Diseñada con foco en conversión y lógica de producto orientada a negocio real: flujos de calificación, segmentación automática y panel de gestión.',
    longDescription:
      'Leadflow AI es una plataforma de gestión de leads construida con lógica de producto real. El sistema captura leads desde múltiples fuentes, los califica automáticamente usando un motor de scoring basado en comportamiento e IA, y los prioriza en un panel de gestión orientado a conversión. Cada lead pasa por un flujo de segmentación que considera perfil, intención y actividad, permitiendo al equipo de ventas enfocarse en los contactos con mayor probabilidad de cierre.',
    highlights: [
      'Motor de scoring de leads basado en comportamiento e inteligencia artificial',
      'Segmentación automática por perfil de cliente e intención de compra',
      'Panel de gestión con métricas de conversión y estado del pipeline',
      'Flujos de calificación configurables adaptados a lógica de negocio real',
    ],
    technologies: ['Nuxt', 'Vue.js', 'Node.js', 'OpenAI API', 'PostgreSQL'],
    gradient:
      'bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20',
    featured: true,
    categories: ['fullstack', 'ai'],
    categoryLabel: 'Full Stack · IA',
    access: 'private', // demo y código disponibles bajo solicitud
  },
  {
    id: 'book-joy',
    title: 'Book Joy',
    description:
      'Aplicación web de reservas y gestión de alojamientos. Producto full stack con lógica real de disponibilidad, flujo de reserva completo, panel de administración y experiencia de usuario orientada a conversión.',
    longDescription:
      'Book Joy es una aplicación web de reservas de alojamientos construida como producto completo, no como ejercicio académico. Implementa lógica real de disponibilidad con gestión de fechas y conflictos, un flujo de reserva completo con selección de fechas, resumen y confirmación, y un panel de administración para gestionar propiedades y visualizar reservas. La experiencia de usuario está diseñada con criterio de conversión: flujo sin fricciones, información clara en cada paso.',
    highlights: [
      'Lógica de disponibilidad real con gestión de conflictos de fechas',
      'Flujo de reserva completo: selección, resumen y confirmación',
      'Panel de administración para gestión de propiedades y reservas',
      'UX orientada a reducir abandono y mejorar tasa de conversión',
    ],
    technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'TypeScript'],
    gradient:
      'bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20',
    featured: false,
    categories: ['fullstack'],
    categoryLabel: 'Full Stack',
    access: 'public',
    // liveUrl: '',
    // githubUrl: '',
  },
  {
    id: 'entire-base',
    title: 'Entire Base',
    description:
      'Plataforma web construida con criterio de posicionamiento digital y experiencia de usuario. Arquitectura de información clara, branding coherente y estructura orientada a captación y conversión.',
    longDescription:
      'Entire Base es el website institucional de una empresa con foco en captación digital. El proyecto arrancó desde la estrategia: definición de arquitectura de información, jerarquía de mensajes y estructura de conversión antes de escribir una línea de código. El resultado es un sitio rápido, semánticamente correcto, con identidad visual coherente y secciones diseñadas para guiar al visitante hacia la acción.',
    highlights: [
      'Arquitectura de información definida desde estrategia de captación',
      'Diseño con identidad de marca coherente en todos los puntos de contacto',
      'Rendimiento optimizado y estructura semántica correcta para SEO',
      'Construido con Nuxt para server-side rendering y carga rápida',
    ],
    technologies: ['Nuxt', 'Vue.js', 'Tailwind CSS', 'TypeScript'],
    gradient:
      'bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20',
    featured: false,
    categories: ['web'],
    categoryLabel: 'Web',
    access: 'public',
    // liveUrl: '',
    // githubUrl: '',
  },
]
