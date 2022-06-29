import { createRouter, createWebHashHistory } from 'vue-router'

// 公有路由biao
const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
