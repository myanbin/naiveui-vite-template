import { RouteRecordRaw } from 'vue-router'
import AppLayout from '@/layouts/app-layout.vue'

const appRoutes: RouteRecordRaw[] = [
  {
    path: '',
    name: 'home',
    component: () => import('@/views/login/index.vue'),
    alias: ['home']
  },
  {
    path: 'help',
    name: 'help',
    component: () => import('@/views/errors/404.vue')
  }
]

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/',
    name: 'layout',
    component: AppLayout,
    children: appRoutes
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'noutfound',
    component: () => import('@/views/errors/404.vue')
  }
]

export default routes
