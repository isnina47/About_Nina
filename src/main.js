import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import 'animate.css' //  引入 animate.css 動畫庫

// 使用 createApp 建立實體物件
const app = createApp(App)

app.use(router)

app.mount('#app')
