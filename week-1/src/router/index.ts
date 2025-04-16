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
    },
    {
      path: '/bai5',
      name: 'bai5',
      component: () => import('../views/Excercise5.vue'),
    },
    {
      path: '/bai6',
      name: 'bai6',
      component: () => import('../views/Excercise6.vue'),
    },
    {
      path: '/bai7',
      name: 'bai7',
      component: () => import('../views/Excercise7.vue'),
    },
    {
      path: '/bai8',
      name: 'bai8',
      component: () => import('../views/Exercise8.vue'),
    },
    {
      path: '/bai9',
      name: 'bai9',
      component: () => import('../views/Exercise9.vue'),
    },
  ],
})

export default router
