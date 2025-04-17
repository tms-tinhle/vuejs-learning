import { createRouter, createWebHistory } from 'vue-router'
import Ex41 from '../views/ExerciseOne.vue'

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
      component: () => import('../views/ExcerciseTwo.vue'),
    },
    {
      path: '/bai4.3',
      name: 'bai3',
      component: () => import('../views/ExcerciseThree.vue'),
    },
    {
      path: '/bai4.4',
      name: 'bai4',
      component: () => import('../views/ExcerciseFour.vue'),
    },
    {
      path: '/bai4.5',
      name: 'bai5',
      component: () => import('../views/ExcerciseFive.vue'),
    },
  ],
})

export default router
