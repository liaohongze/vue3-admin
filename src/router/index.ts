import { createRouter, createWebHistory } from 'vue-router'
import login from '@/views/login/login.vue'
import modifyPassword from '@/views/login/modifyPassword.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/modifyPassword',
      name: 'modifyPassword',
      component: modifyPassword
    }
  ]
})

export default router
