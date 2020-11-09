import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/home.vue'),
  },
  {
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "test" */ '@/views/test.vue'),
  },
]

const router = createRouter({
  // history: createWebHashHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes,
})

export default router
