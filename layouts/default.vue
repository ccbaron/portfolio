<template>
  <div
    class="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300"
  >
    <LayoutNavBar />
    <main>
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useMainStore } from "@/stores/main";

const mainStore = useMainStore();

onMounted(() => {
  mainStore.initTheme();
});
</script>
