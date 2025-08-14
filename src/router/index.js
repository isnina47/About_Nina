// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Resume from '../views/Resume.vue'
import Portfolio from '../views/Portfolio.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/resume', name: 'Resume', component: Resume },
  { path: '/portfolio', name: 'Portfolio', component: Portfolio }
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
