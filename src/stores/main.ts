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
    document.documentElement.classList.toggle('dark', theme.value === 'dark')
    localStorage.setItem('theme', theme.value)
  }

  const initTheme = () => {
    const savedTheme = localStorage.getItem('theme') as Theme
    if (savedTheme) {
      theme.value = savedTheme
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      theme.value = 'dark'
    }
    document.documentElement.classList.toggle('dark', theme.value === 'dark')
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