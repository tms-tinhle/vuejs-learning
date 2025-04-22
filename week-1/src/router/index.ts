import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/ExerciseOneView.vue'
import { RouteNames } from '@/constant/routeNamesConstant'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/bai9-1',
      name: RouteNames.Exercise9_1,
      component: HomeView,
    },
    {
      path: '/bai9-2',
      name: RouteNames.Exercise9_2,
      component: () => import('../views/ExerciseTwoView.vue'),
    },
  ],
})

export default router
