// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import './style.css'
// import { MotionPlugin, MotionDirective } from '@vueuse/motion'

// const app = createApp(App)

// app.use(router)
// app.use(MotionPlugin) // 基本功能
// app.directive('motion', MotionDirective)

// app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import 'animate.css' // ✅ 引入 animate.css 動畫庫

const app = createApp(App)

app.use(router)

app.mount('#app')
