import { createRouter, createWebHistory } from 'vue-router'
import Ex41 from '../views/ExerciseOneView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/bai4.1',
      name: 'bai1',
      component: Ex41,
    },
    {
      path: '/bai4.2',
      name: 'bai2',
      component: () => import('../views/ExcerciseTwoView.vue'),
    },
    {
      path: '/bai4.3',
      name: 'bai3',
      component: () => import('../views/ExcerciseThreeView.vue'),
    },
    {
      path: '/bai4.4',
      name: 'bai4',
      component: () => import('../views/ExcerciseFourView.vue'),
    },
    {
      path: '/bai4.5',
      name: 'bai5',
      component: () => import('../views/ExcerciseFiveView.vue'),
    },
  ],
})

export default router
