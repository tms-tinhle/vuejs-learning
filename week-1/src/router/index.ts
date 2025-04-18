import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/ExerciseOneView.vue'
import { RouteNames } from '@/constant/routeNames'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/bai4.1',
      name: RouteNames.Exercise5_1,
      component: HomeView,
    },
    {
      path: '/bai4.2',
      name: RouteNames.Exercise5_2,
      component: () => import('../views/ExerciseTwoView.vue'),
    },
    {
      path: '/bai4.3',
      name: RouteNames.Exercise5_3,
      component: () => import('../views/ExerciseThreeView.vue'),
    },
  ],
})

export default router
