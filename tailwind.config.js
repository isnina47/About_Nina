export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Noto Serif TC"', 'serif']
      },
      colors: {
        // 只用你提供的五色 + 白/黑
        background: '#FFD3DD', // 整體淺底
        header: '#CCA1C9',
        footer: '#CCA1C9',
        title: '#2d2d2d', // 深灰標題（保留可讀性）
        text: '#4f4f4f', // 內文
        textLight: '#92A1C3', // 次要資訊/時間
        textHover: '#F3A0AD', // hover 重點
        totop: '#333333',

        btn: '#CCA1C9', // 主要按鈕
        btnHover: '#92A1C3', // hover（仍在五色內）
        btnText: '#ffffff',
        btnborder: '#92A1C3',
        border: '#92A1C3',

        // 方便做標籤/卡片底色
        accent: '#BED1E3'
      }
    }
  },
  plugins: []
}
