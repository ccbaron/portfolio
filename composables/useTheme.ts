import { computed } from "vue";
import { useMainStore } from "@/stores/main";

export function useTheme() {
  const store = useMainStore();

  const isDark = computed(() => store.theme === "dark");

  const themeIcon = computed(() => (isDark.value ? "sun" : "moon"));

  const toggleTheme = () => {
    store.toggleTheme();
  };

  return {
    isDark,
    themeIcon,
    toggleTheme,
    theme: computed(() => store.theme),
  };
}
