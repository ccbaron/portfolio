import { defineStore } from "pinia";
import { ref } from "vue";
import type { Theme } from "@/types";

export const useMainStore = defineStore("main", () => {
  // State
  const theme = ref<Theme>("light");
  const isMenuOpen = ref(false);
  const isLoading = ref(false);

  // Actions
  const toggleTheme = () => {
    theme.value = theme.value === "light" ? "dark" : "light";

    if (import.meta.client) {
      if (theme.value === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("theme", theme.value);
    }
  };

  const initTheme = () => {
    if (import.meta.client) {
      const savedTheme = localStorage.getItem("theme") as Theme;
      if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
        theme.value = savedTheme;
      } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        theme.value = "dark";
      } else {
        theme.value = "light";
      }

      if (theme.value === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  };

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };

  const closeMenu = () => {
    isMenuOpen.value = false;
  };

  const setLoading = (loading: boolean) => {
    isLoading.value = loading;
  };

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
    setLoading,
  };
});
