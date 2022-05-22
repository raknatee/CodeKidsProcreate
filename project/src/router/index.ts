import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create-new-canvas',
    name: 'create-new-canvas',
    component: () => import("@/views/001-create-canvas.vue")
  },
  {
    path: '/tools',
    component: () => import("@/views/002-tools.vue")
  },
  {
    path: '/opacity',
    component: () => import("@/views/002-tools/Opacity.vue")

  }
  ,
  {
    path: '/brush-size',
    component: () => import("@/views/002-tools/BrushSize.vue")

  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
