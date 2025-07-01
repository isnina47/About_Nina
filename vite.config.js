import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/About_Nina/', // ←  GitHub 專案名稱
  plugins: [vue()],
  assetsInclude: ['**/*.JPG'] // 若圖片是 .JPG 大寫副檔名
})
