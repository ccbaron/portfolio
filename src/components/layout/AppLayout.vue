<template>
  <div class="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
    <!-- Navigation -->
    <NavBar />
    
    <!-- Main Content -->
    <main>
      <router-view />
    </main>
    
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useMainStore } from '@/stores/main'
import NavBar from '@/components/layout/NavBar.vue'
import Footer from '@/components/layout/Footer.vue'

const mainStore = useMainStore()

onMounted(() => {
  mainStore.initTheme()
})
</script>