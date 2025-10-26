#!/bin/bash

# GUÍA DE COMANDOS RÁPIDOS - CC BARON PORTFOLIO
# ================================================

echo "🎯 CC Baron Portfolio - Comandos de Desarrollo"
echo "=============================================="

# DESARROLLO
echo ""
echo "📱 COMANDOS DE DESARROLLO:"
echo "-------------------------"
echo "npm run dev          # Iniciar servidor desarrollo (puerto 3000)"
echo "npm run dev:force    # Servidor con reconstrucción forzada"
echo "npm run type-check   # Verificar tipos TypeScript"
echo "npm run lint         # Linter con auto-corrección"

# PRODUCCIÓN
echo ""
echo "🏗️  COMANDOS DE PRODUCCIÓN:"
echo "---------------------------"
echo "npm run build        # Build optimizado para producción"
echo "npm run preview      # Vista previa del build local"

# LIMPIEZA Y CACHÉ
echo ""
echo "🧹 LIMPIEZA DE CACHÉ:"
echo "--------------------"
echo "npm run clean        # Limpiar caché de Vite y TypeScript"
echo "npm run fresh        # Limpieza total + reinicio"
echo ""
echo "# Limpieza manual completa:"
echo "rm -rf node_modules package-lock.json"
echo "rm -rf node_modules/.vite node_modules/.tmp dist .vite"
echo "npm install && npm run dev:force"

# DESARROLLO DEL TEMA
echo ""
echo "🌓 DEBUG DEL TEMA OSCURO/CLARO:"
echo "------------------------------"
echo "# Verificar en DevTools (F12 > Console):"
echo "# - 'Theme initialized: light/dark'"
echo "# - 'Theme toggled to: light/dark'"
echo ""
echo "# Verificar clase CSS en HTML:"
echo "document.documentElement.classList.contains('dark')"

# GIT WORKFLOW
echo ""
echo "📝 WORKFLOW GIT RECOMENDADO:"
echo "---------------------------"
echo "git add ."
echo "git commit -m 'feat: descripción del cambio'"
echo "git push origin main"

# ESTRUCTURA DE ARCHIVOS
echo ""
echo "📁 ARCHIVOS IMPORTANTES:"
echo "------------------------"
echo "src/stores/main.ts           # Estado global (tema, menú)"
echo "src/components/layout/       # Componentes de layout"
echo "src/components/sections/     # Secciones principales"
echo "tailwind.config.js           # Configuración de estilos"
echo "vite.config.ts               # Configuración de build"
echo "package.json                 # Dependencias y scripts"

# PERSONALIZACIÓN
echo ""
echo "🎨 PERSONALIZACIÓN RÁPIDA:"
echo "-------------------------"
echo "# Cambiar colores primarios:"
echo "# Editar: tailwind.config.js > theme.extend.colors.primary"
echo ""
echo "# Cambiar información personal:"
echo "# Editar: src/components/sections/Home.vue"
echo "# Editar: src/components/sections/About.vue"
echo ""
echo "# Agregar proyectos:"
echo "# Editar: src/components/sections/Projects.vue > projects array"

# DEPLOYMENT
echo ""
echo "🌐 COMANDOS DE DEPLOYMENT:"
echo "-------------------------"
echo "# Netlify:"
echo "npm run build"
echo "# Subir carpeta 'dist' a Netlify"
echo ""
echo "# Vercel:"
echo "npm i -g vercel"
echo "npm run build && vercel --prod"
echo ""
echo "# GitHub Pages:"
echo "npm run build"
echo "# Configurar GitHub Actions (ver README)"

# TROUBLESHOOTING
echo ""
echo "🔧 SOLUCIÓN DE PROBLEMAS COMUNES:"
echo "--------------------------------"
echo ""
echo "❌ Tema no funciona:"
echo "   → Verificar darkMode: 'class' en tailwind.config.js"
echo "   → Revisar console para logs de debug"
echo ""
echo "❌ Cambios no aparecen:"
echo "   → npm run fresh"
echo "   → Hard refresh: Cmd+Shift+R (Mac) / Ctrl+Shift+R (Windows)"
echo ""
echo "❌ Error de módulos ES/CommonJS:"
echo "   → Verificar que postcss.config.cjs existe (no .js)"
echo ""
echo "❌ Puerto ocupado:"
echo "   → Vite automáticamente usa puerto alternativo (3001, 3002, etc.)"
echo "   → O matar proceso: lsof -ti:3000 | xargs kill"

# EXTENSIONES VSCode RECOMENDADAS
echo ""
echo "🔌 EXTENSIONES VSCODE RECOMENDADAS:"
echo "----------------------------------"
echo "- Vue Language Features (Volar)"
echo "- TypeScript Vue Plugin (Volar)"
echo "- Tailwind CSS IntelliSense"
echo "- Auto Rename Tag"
echo "- Bracket Pair Colorizer"
echo "- GitLens"

# RECURSOS
echo ""
echo "📚 RECURSOS ÚTILES:"
echo "------------------"
echo "Vue 3 Docs:      https://vuejs.org/guide/"
echo "TypeScript:      https://www.typescriptlang.org/docs/"
echo "Tailwind CSS:    https://tailwindcss.com/docs"
echo "Vite:            https://vitejs.dev/guide/"
echo "Pinia:           https://pinia.vuejs.org/"
echo "Netlify Docs:    https://docs.netlify.com/"