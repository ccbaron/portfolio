# CC Baron - Portfolio Web 

Portfolio profesional desarrollado con Vue 3, TypeScript, Tailwind CSS y Vite. Un sitio web moderno y responsivo que muestra mis habilidades como desarrollador Full Stack.

## Características

- **Vue 3** con Composition API y `<script setup>`
- **TypeScript** para un desarrollo más seguro y mantenible
- **Tailwind CSS** para estilos modernos y responsivos
- **Vue Router** para navegación SPA
- **Pinia** para gestión de estado
- **Tema oscuro/claro** con transiciones suaves
- **Animaciones** personalizadas y micro-interacciones
- **SEO optimizado** y accesible
- **Responsive design** para todos los dispositivos
- **Arquitectura escalable** con separación de responsabilidades

## Stack Tecnológico

### Frontend
- Vue.js 3.5+
- TypeScript 5.9+
- Tailwind CSS 3.4+
- Vue Router 4.6+
- Pinia 3.0+
- Vite 7.1+

### Desarrollo
- ESLint para linting
- Prettier para formato
- Git hooks con Husky
- Deployment automático

## Estructura del Proyecto

```
ccbaron-portfolio/
├── public/                 # Archivos estáticos
├── src/
│   ├── assets/             # Imágenes, iconos, fuentes
│   ├── components/         # Componentes Vue
│   │   ├── layout/         # Layouts (Header, Footer, etc.)
│   │   ├── sections/       # Secciones principales
│   │   └── ui/             # Componentes UI reutilizables
│   ├── composables/        # Composables de Vue
│   ├── router/             # Configuración de rutas
│   ├── stores/             # Stores de Pinia
│   ├── types/              # Tipos TypeScript
│   ├── utils/              # Utilidades y helpers
│   ├── App.vue             # Componente raíz
│   ├── main.ts             # Punto de entrada
│   └── styles.css          # Estilos globales
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Inicio Rápido

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación

1. **Clona el repositorio**
```bash
git clone https://github.com/ccbaron/portfolio.git
cd portfolio
```

2. **Instala las dependencias**
```bash
npm install
```

3. **Inicia el servidor de desarrollo**
```bash
npm run dev
```

4. **Abre tu navegador** en [http://localhost:3000](http://localhost:3000)

### Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo con hot reload

# Producción
npm run build        # Build optimizado para producción
npm run preview      # Vista previa del build de producción

# Calidad de código
npm run type-check   # Verificación de tipos TypeScript
npm run lint         # Linting con ESLint
```

## Personalización

### Temas y Colores
Los colores principales se pueden personalizar en `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Tu paleta de colores personalizada
      }
    }
  }
}
```

### Contenido
- Actualiza la información personal en `src/components/sections/`
- Modifica los proyectos en `src/components/sections/Projects.vue`
- Cambia los datos de contacto en `src/components/sections/Contact.vue`

## Secciones

- **Home**: Presentación principal con llamada a la acción
- **Acerca**: Información personal, habilidades y experiencia
- **Proyectos**: Portfolio de trabajos con filtros por categoría
- **Contacto**: Formulario de contacto y información personal

## Deploy

### Netlify (Recomendado)
```bash
npm run build
# Sube la carpeta 'dist' a Netlify
```

### Vercel
```bash
npm run build
vercel --prod
```

### GitHub Pages
```bash
npm run build
# Configura GitHub Actions para deploy automático
```

## Contribución

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

**CC Baron** - Desarrollador Full Stack

- 📧 Email: contacto@ccbaron.dev
- 🌐 Web: [ccbaron.dev](https://ccbaron.dev)
- 💼 LinkedIn: [linkedin.com/in/ccbaron](https://linkedin.com/in/christianbaron-)
- 🐙 GitHub: [github.com/ccbaron](https://github.com/ccbaron)

---

**¡Si este proyecto te ha sido útil, considera darle una estrella!**
