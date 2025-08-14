export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Noto Serif TC"', 'serif']
      },
      colors: {
        background: '#EBDDC5', // 全站背景
        title: '#2E4365', // 標題
        text: '#2E4365', // 主要文字
        textLight: '#8A3B08', // 輔助文字、hover 效果
        btn: '#E59D2C', // 按鈕主色
        btnHover: '#8A3B08', // 按鈕 hover
        btnText: '#ffffff', // 按鈕文字
        btnborder: '#8A3B08', // 按鈕邊框
        border: '#8A3B08', // 元件邊框
        accent: '#F3D58D' // 卡片背景或標籤底色
      }
    }
  },
  plugins: []
}
