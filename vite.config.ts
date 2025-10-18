import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@/components': resolve(__dirname, 'src/components'),
      '@/composables': resolve(__dirname, 'src/composables'),
      '@/types': resolve(__dirname, 'src/types'),
      '@/stores': resolve(__dirname, 'src/stores'),
      '@/assets': resolve(__dirname, 'src/assets'),
      '@/router': resolve(__dirname, 'src/router'),
      '@/utils': resolve(__dirname, 'src/utils'),
    }
  },
  server: {
    port: 3000,
    open: true
  }
})
