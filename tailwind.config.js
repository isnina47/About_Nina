export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Noto Serif TC"', 'serif'] // 自訂 serif 為 Noto Serif TC
      },
      colors: {
        background: '#f5f3ef',
        header: '#eae4dc',
        footer: '#eae4dc',
        title: '#2d2d2d', //標題
        text: '#5f5f5f', //內文
        textLight: '#9a9a9a', // 註解或時間
        textHover: '#70866c', //導航列文字
        totop: '#333333',
        btn: '#b2a89d',
        btnHover: '#998e82',
        btnText: '#2e2e2e',
        btnborder: '#cfc7bd',
        border: '#4e4a45'
      }
    }
  },
  plugins: []
}
