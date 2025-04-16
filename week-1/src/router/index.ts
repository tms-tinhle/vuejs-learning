import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Excercise2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/bai2',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/bai3',
      name: 'about',
      component: () => import('../views/Excercise3.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/bai4',
      name: 'bai4',
      component: () => import('../views/Excercise4.vue'),
    }

  ],
})

export default router
