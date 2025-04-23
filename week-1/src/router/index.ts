import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { RouteNames } from '@/constant/routeNamesConstant'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: RouteNames.Student_list,
      component: HomeView,
    },
    {
      path: '/students/create',
      name: RouteNames.Student_create,
      component: () => import('../views/StudentCreateView.vue'),
    },
    {
      path: '/students/:id',
      name: RouteNames.Student_details,
      component: () => import('../views/StudentDetailView.vue'),
    },
    {
      path: '/students/:id/edit',
      name: RouteNames.Student_edit,
      component: () => import('../views/StudentEditView.vue'),
    },
  ],
})

export default router
