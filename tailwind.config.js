export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Noto Serif TC"', 'serif'] // 自訂 serif 為 Noto Serif TC
      },
      colors: {
        // 主題色系（套用你的新配色）
        background: '#f0f0f0', // 淺灰背景
        header: '#6cb1c9', // 頂部導航背景
        footer: '#6cb1c9', // 頁腳背景
        title: '#2d2d2d', // 標題文字
        text: '#5f5f5f', // 內文文字
        textLight: '#9a9a9a', // 註解、時間
        textHover: '#bf8e68', // 導航列 hover 文字（栗棕）
        totop: '#333333', // 回到頂部按鈕色
        btn: '#6cb1c9', // 按鈕主色
        btnHover: '#4d96ab', // 按鈕 hover 色
        btnText: '#ffffff', // 按鈕文字
        btnborder: '#bf8e68', // 按鈕邊框色
        border: '#bf8e68' // 元件邊框色
      }
    }
  },
  plugins: []
}
