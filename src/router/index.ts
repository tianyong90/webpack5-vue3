import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/home.vue'),
  },
]

const router = createRouter({
  // TODO:
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory('/'),
  routes,
})

export default router
