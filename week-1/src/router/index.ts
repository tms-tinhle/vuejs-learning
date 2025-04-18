import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/ExerciseOneView.vue'
import { RouteNames } from '@/constant/routeNamesConstant'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/exercise-one',
      name: RouteNames.Exercise6_1,
      component: HomeView,
    },
    {
      path: '/exercise-two',
      name: RouteNames.Exercise6_2,
      component: () => import('../views/ExerciseTwoView.vue'),
    },
    {
      path: '/exercise-three',
      name: RouteNames.Exercise6_3,
      component: () => import('../views/ExerciseThreeView.vue'),
    },
  ],
})

export default router
