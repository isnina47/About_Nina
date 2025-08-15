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
  history: createWebHistory('/About_Nina/'),
  routes,
  // 切換頁面時會自動滾動到頂部
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
