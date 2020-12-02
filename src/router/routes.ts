import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/home.vue'),
  },
  {
    path: '/rainday',
    name: 'rainday',
    component: () => import(/* webpackChunkName: "rainday" */ '@/views/rainday.vue'),
  },
  {
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "test" */ '@/views/test.vue'),
  },

  {
    path: '/:catchAll(.*)',
    component: () => import(/* webpackChunkName: "test" */ '@/views/errors/404.vue'),
  },
]

export default routes
