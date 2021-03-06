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
  },
  {
    path: '/actions',
    component: () => import("@/views/002-tools/Actions.vue")
  }
  ,
  {
    path: '/mask-tool',
    component: () => import("@/views/002-tools/MaskTool.vue")
  }
  ,
  {
    path: '/brush',
    component: () => import("@/views/002-tools/Brush.vue")
  }
  ,
  {
    path: '/smudge-tool',
    component: () => import("@/views/002-tools/SmudgeTool.vue")
  }
  ,
  {
    path: '/colors',
    component: () => import("@/views/002-tools/Colors.vue")
  },
  {
    path:'/layers',
    component: () => import("@/views/002-tools/Layers.vue")
  }
  ,
  {
    path: '/export',
    component: () => import("@/views/003-export.vue")
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
