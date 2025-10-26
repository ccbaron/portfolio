// Ejemplo de composable para el tema
// Archivo: useTheme.ts
import { computed } from 'vue'
import { useMainStore } from '@/stores/main'

/**
 * Composable para gestionar el tema de la aplicación
 * 
 * @example
 * const { isDark, toggleTheme, themeIcon } = useTheme()
 */
export function useTheme() {
  const store = useMainStore()

  const isDark = computed(() => store.theme === 'dark')
  
  const themeIcon = computed(() => 
    isDark.value ? 'sun' : 'moon'
  )

  const toggleTheme = () => {
    store.toggleTheme()
  }

  return {
    isDark,
    themeIcon,
    toggleTheme,
    theme: computed(() => store.theme)
  }
}

// Para usar en cualquier componente:
// const { isDark, toggleTheme } = useTheme()