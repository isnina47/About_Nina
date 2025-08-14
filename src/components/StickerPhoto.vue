<template>
  <div class="relative" :style="{ width: w + 'px', height: h + 'px' }">
    <!-- 背後圓（mist blue） -->
    <div
      class="absolute -z-10 left-[-24px] top-[18px] rounded-full"
      :style="{ width: w * 0.85 + 'px', height: h * 0.85 + 'px', background: circleColor }"
    ></div>

    <!-- 左側圓點裝飾（periwinkle，md 以上顯示） -->
    <div
      class="hidden md:block absolute -z-10 left-[-36px] top-[-10px] w-28 h-32 polka"
      :style="{ '--polka': polkaColor }"
    ></div>

    <!-- 貼紙剪影（SVG） -->
    <svg
      :viewBox="`0 0 ${vbw} ${vbh}`"
      class="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <clipPath id="blobClip">
          <path :d="blobPath"></path>
        </clipPath>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="rgba(0,0,0,.18)" />
        </filter>
      </defs>

      <!-- 圖片（被剪影裁切） -->
      <image
        :href="resolvedSrc"
        :xlink:href="resolvedSrc"
        x="0"
        y="0"
        :width="vbw"
        :height="vbh"
        preserveAspectRatio="xMidYMid slice"
        clip-path="url(#blobClip)"
        filter="url(#softShadow)"
      />

      <!-- 白色外框（貼紙邊） -->
      <path
        :d="blobPath"
        fill="none"
        stroke="#ffffff"
        :stroke-width="outline"
        stroke-linejoin="round"
      />
      <!-- 玫瑰色偏移外框 -->
      <g transform="translate(6,6)">
        <path
          :d="blobPath"
          fill="none"
          :stroke="outlineAccentColor"
          :stroke-width="outline * 0.65"
          stroke-linejoin="round"
          opacity=".95"
        />
      </g>
    </svg>
  </div>
</template>

<script setup>
  import { computed } from 'vue'

  const props = defineProps({
    // 圖片
    src: { type: String, default: '/images/ninalife.jpg' },
    // 尺寸
    w: { type: Number, default: 300 },
    h: { type: Number, default: 320 },
    // 新色票（可改）
    circleColor: { type: String, default: '#BED1E3' }, // 背後圓
    outlineAccentColor: { type: String, default: '#F3A0AD' }, // 偏移外框
    polkaColor: { type: String, default: '#92A1C3' } // 圓點
  })

  // 解析圖片路徑（支援 GitHub Pages base）
  const resolvedSrc = computed(() => {
    const s = props.src || ''
    if (s.startsWith('http') || s.startsWith('data:')) return s
    if (s.startsWith('/')) {
      const base = import.meta.env.BASE_URL?.replace(/\/$/, '') || ''
      return `${base}${s}`
    }
    return new URL(s, import.meta.url).href
  })

  const vbw = 300
  const vbh = 360
  const outline = 12

  // 不規則剪影
  const blobPath =
    'M40,40 C55,20 95,18 120,28 C155,40 190,35 215,55 C238,74 250,110 255,150 C258,188 245,225 220,248 C195,270 160,278 130,285 C105,291 72,300 55,285 C35,268 30,238 28,210 C26,182 20,150 25,120 C29,92 25,62 40,40 Z'
</script>

<style scoped>
  /* 使用 CSS 變數吃顏色，方便由 props 傳入 */
  .polka {
    background-image: radial-gradient(var(--polka) 4px, transparent 4px);
    background-size: 18px 18px;
  }
</style>
