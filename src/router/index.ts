import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/sections/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/components/sections/About.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/components/sections/Projects.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/components/sections/Contact.vue')
    }
  ],
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router