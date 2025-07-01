// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Portfolio from '../views/Portfolio.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
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
