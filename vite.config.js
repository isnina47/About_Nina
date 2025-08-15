import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/About_Nina/' : '/', //  dev 用根路徑、prod 用子路徑
  plugins: [vue()],
  assetsInclude: ['**/*.JPG'],
  server: {
    host: true, // 讓手機可連區網
    port: 5173,
    strictPort: true
  }
}))
// dev 模式 base = / → 本地網址直接是 http://192.168.1.106:5173/

// build 模式 base = /About_Nina/ → 部署到 GitHub Pages 時正常讀資源
