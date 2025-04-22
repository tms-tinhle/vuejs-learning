import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { RouteNames } from '@/constant/routeNamesConstant'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: RouteNames.Home,
      component: HomeView,
    },
    {
      path: '/about',
      name: RouteNames.About,
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/contact',
      name: RouteNames.Contact,
      component: () => import('../views/ContactView.vue'),
    },
  ],
})

export default router
