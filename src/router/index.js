import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Resume from '../views/Resume.vue'
import Portfolio from '../views/Portfolio.vue'

const routes = [
  { path: '/', name: 'Home', component: Home, meta: { grid: false } },
  { path: '/resume', name: 'Resume', component: Resume, meta: { grid: true } },
  { path: '/portfolio', name: 'Portfolio', component: Portfolio, meta: { grid: true } }
]

const router = createRouter({
  // ✅ 自動吃 Vite 的 base（dev 是 '/', build 到 GH Pages 會是 '/About_Nina/'）
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
