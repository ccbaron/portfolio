// Single source of truth for all portfolio projects.
// Imported by both the list page (pages/projects/index.vue)
// and the detail page (pages/projects/[id].vue).

export type ProjectAccess = "public" | "private";
export type ProjectCategory = "web" | "fullstack" | "ai";

export interface PortfolioProject {
  id: string;
  title: string;
  description: string; // short — shown on cards in the list
  longDescription: string; // extended — shown on the detail page
  highlights: string[]; // key value points — shown on the detail page
  technologies: string[];
  gradient: string; // Tailwind gradient classes for the color band
  image?: string; // path relative to /public, e.g. /images/projects/foo.webp
  imagePosition?: string; // Tailwind object-position class, defaults to object-center
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  categories: ProjectCategory[]; // array to allow multi-category filtering
  categoryLabel: string; // human-readable label shown on cards
  access: ProjectAccess;
  // 'public'  — shows demo + code links normally
  // 'private' — hides links, shows "Solicitar acceso" instead
}

export const projects: PortfolioProject[] = [
  {
    id: "content-intelligence-agent",
    title: "Content Intelligence Agent",
    description:
      "Herramienta de estrategia de contenido e investigación asistida por IA. Automatiza la identificación de oportunidades, el análisis de competencia y la estructuración de briefs, reduciendo el tiempo de investigación manual.",
    longDescription:
      "Content Intelligence Agent es un agente de IA construido para tareas reales de estrategia de contenido: comparar mensajes de competidores, detectar gaps temáticos y generar briefs estructurados. El agente no responde directamente — primero planifica, decide si necesita herramientas, ejecuta búsqueda web o recupera conocimiento interno, genera un borrador y opcionalmente lo evalúa antes de devolver la respuesta. El resultado llega al frontend vía streaming SSE con actualizaciones de estado en tiempo real.",
    highlights: [
      "Pipeline de agente con planificador, herramientas y evaluador — cada paso con lógica propia y responsabilidad separada.",
      "Búsqueda web con Tavily + recuperación de conocimiento interno con RAG (cosine similarity)",
      "Streaming SSE: el frontend muestra el progreso y los pasos del agente en tiempo real",
      "Modos configurables: cost saver para uso cotidiano, showcase para demostrar el pipeline completo",
    ],
    technologies: ["Google AI", "Tavily", "Node.js", "Express", "TypeScript"],
    gradient:
      "bg-gradient-to-br from-violet-100 to-indigo-100 dark:from-violet-900/20 dark:to-indigo-900/20",
    image: "/images/projects/content-intelligence-agent.webp",
    featured: true,
    categories: ["ai"],
    categoryLabel: "IA Aplicada",
    access: "public",
    // liveUrl: '',   // añadir cuando esté desplegado
    githubUrl: "https://github.com/ccbaron/ai-agent-content-strategy",
  },
  {
    id: "leadflow-ai",
    title: "Leadflow AI",
    description:
      "Plataforma full stack de captación, scoring automático y gestión de pipeline de ventas. El motor de scoring cualifica cada lead sin intervención manual según presupuesto, tipo de proyecto e indicadores B2B.",
    longDescription:
      "LeadFlow AI automatiza el ciclo completo de un lead de ventas: captura, cualificación y seguimiento. El motor de scoring asigna una puntuación (0–100) y prioridad (alta / media / baja) en el momento de creación, combinando presupuesto, tipo de proyecto, calidad del mensaje e indicadores B2B como la presencia de empresa. El backend en Express expone una API REST con autenticación JWT, rate limiting por ruta, sanitización de inputs y aislamiento de datos por usuario. El panel incluye gráficas en tiempo real, filtros avanzados, operaciones en bloque y exportación a CSV.",
    highlights: [
      "Motor de scoring algorítmico: presupuesto (40 pts), tipo de proyecto (30 pts), mensaje e indicadores B2B — puntuación recalculada en cada actualización",
      "Pipeline de ventas con workflow de estados: nuevo → contactado → cualificado → descartado",
      "Audit trail completo: cada cambio sobre un lead queda registrado con atribución de usuario",
      "API REST con auth JWT, rate limiting diferenciado por ruta, Helmet y sanitización de inputs",
    ],
    technologies: [
      "React",
      "React Router",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Recharts",
    ],
    gradient:
      "bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20",
    image: "/images/projects/leadflow-ai.webp",
    featured: true,
    categories: ["fullstack", "ai"],
    categoryLabel: "Full Stack · IA",
    access: "private", // demo y código disponibles bajo solicitud
  },
  {
    id: "directstay",
    title: "DirectStay",
    description:
      "Motor de reservas de alojamientos. Flujo completo desde búsqueda hasta confirmación, con Server Actions, doble validación client/server y panel de reservas.",
    longDescription:
      "DirectStay cubre el ciclo completo de una reserva: búsqueda con filtros, detalle de apartamento, formulario de reserva y confirmación con ID persistido en base de datos. El flujo de reserva usa Server Actions de Next.js — la validación con Zod se ejecuta dos veces, en cliente vía React Hook Form y en servidor antes de escribir en la base de datos, de modo que el write solo se alcanza con datos limpios aunque alguien bypass el formulario. Las páginas de detalle se pre-renderizan en build time con generateStaticParams (SSG). El panel de administración lista todas las reservas directamente desde PostgreSQL.",
    highlights: [
      "Server Actions sobre API routes: validación Zod compartida entre cliente y servidor, sin capa de API intermedia",
      "Doble validación client + server — el write a base de datos solo se alcanza con datos limpios",
      "SSG en páginas de detalle con generateStaticParams, páginas dinámicas solo donde hace falta",
      "Panel de administración con listado de reservas en tiempo real desde PostgreSQL",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Zod",
      "React Hook Form",
    ],
    gradient:
      "bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20",
    image: "/images/projects/directstay-cover.webp",
    featured: false,
    categories: ["fullstack"],
    categoryLabel: "Full Stack",
    access: "public",
    liveUrl: "https://directstay-engine.vercel.app",
    githubUrl: "https://github.com/ccbaron/directstay-booking-engine",
  },
  {
    id: "entire-base",
    title: "Entire Base",
    description:
      "Website institucional con arquitectura frontend/backend separada. Nuxt 4 para las páginas públicas y API Express propia para el pipeline de captación: validación, persistencia en MongoDB y notificaciones por email.",
    longDescription:
      "Entire Base arrancó desde la estrategia: arquitectura de información, jerarquía de mensajes y estructura de conversión antes de escribir una línea de código. El frontend en Nuxt 4 gestiona las páginas públicas con SSR. El backend en Express expone una API de contacto con validación estricta vía Zod, persistencia en MongoDB Atlas y notificaciones de nuevos leads por email usando Resend. El endpoint de contacto incluye rate limiting por IP para evitar abuso del formulario.",
    highlights: [
      "Arquitectura frontend/backend separada: Nuxt 4 + API Express con endpoints de contacto y health check",
      "Pipeline de captación completo: validación con Zod, persistencia en MongoDB, notificación por email con Resend",
      "Rate limiting por IP en el endpoint de contacto",
      "Estructura y copy orientados a guiar al visitante hacia la conversión",
    ],
    technologies: [
      "Nuxt",
      "Vue.js",
      "Tailwind CSS",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Zod",
      "Resend",
    ],
    gradient:
      "bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20",
    image: "/images/projects/entire-base.webp",
    featured: false,
    categories: ["web"],
    categoryLabel: "Web",
    access: "public",
    liveUrl: "https://entire-base.vercel.app",
    githubUrl: "https://github.com/ccbaron/entire-base",
  },
];
