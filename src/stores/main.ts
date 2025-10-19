import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Theme } from '@/types'

export const useMainStore = defineStore('main', () => {
  // State
  const theme = ref<Theme>('light')
  const isMenuOpen = ref(false)
  const isLoading = ref(false)

  // Actions
  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    
    // Aplicar la clase al HTML
    if (theme.value === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    
    // Guardar en localStorage
    localStorage.setItem('theme', theme.value)
    
    console.log('Theme toggled to:', theme.value) // Debug temporal
  }

  const initTheme = () => {
    const savedTheme = localStorage.getItem('theme') as Theme
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      theme.value = savedTheme
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      theme.value = 'dark'
    } else {
      theme.value = 'light'
    }
    
    // Asegurar que la clase se aplique correctamente
    if (theme.value === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    
    console.log('Theme initialized:', theme.value) // Debug temporal
  }

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }

  const closeMenu = () => {
    isMenuOpen.value = false
  }

  const setLoading = (loading: boolean) => {
    isLoading.value = loading
  }

  return {
    // State
    theme,
    isMenuOpen,
    isLoading,
    // Actions
    toggleTheme,
    initTheme,
    toggleMenu,
    closeMenu,
    setLoading
  }
})