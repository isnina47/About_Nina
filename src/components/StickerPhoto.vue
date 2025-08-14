<template>
  <div class="relative" :style="{ width: w + 'px', height: h + 'px' }">
    <!-- 背後米黃色圓 -->
    <div
      class="absolute -z-10 left-[-24px] top-[18px] rounded-full"
      :style="{ width: w * 0.85 + 'px', height: h * 0.85 + 'px', background: '#F3D58D' }"
    ></div>

    <!-- 左側深藍圓點裝飾（md 以上顯示） -->
    <div class="hidden md:block absolute -z-10 left-[-36px] top-[-10px] w-28 h-32 polka"></div>

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
      <!-- 橘金色偏移外框（手繪感） -->
      <g transform="translate(6,6)">
        <path
          :d="blobPath"
          fill="none"
          stroke="#E59D2C"
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
    // 預設放 public/images 下；開發是 "/"、佈署是 "/About_Nina/"
    src: { type: String, default: '/images/ninalife.jpg' },
    w: { type: Number, default: 300 },
    h: { type: Number, default: 320 }
  })

  // 解析最終圖片路徑（支援 / 開頭、http(s)、data:、相對路徑）
  const resolvedSrc = computed(() => {
    const s = props.src || ''
    if (s.startsWith('http') || s.startsWith('data:')) return s
    if (s.startsWith('/')) {
      // 加上 base，GitHub Pages 會是 /About_Nina/
      const base = import.meta.env.BASE_URL?.replace(/\/$/, '') || ''
      return `${base}${s}`
    }
    // 相對於此元件檔案（用於 src/assets 內的檔案）
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
  .polka {
    background-image: radial-gradient(#2e4365 4px, transparent 4px);
    background-size: 18px 18px;
  }
</style>
