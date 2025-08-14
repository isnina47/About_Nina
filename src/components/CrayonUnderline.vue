<template>
  <!-- 寬度吃父層，貼在底部 -->
  <svg
    class="absolute left-0 -bottom-1 w-full"
    :style="{ height: `${height}px` }"
    viewBox="0 0 300 24"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <defs>
      <filter id="crayon-noise" x="-20%" y="-50%" width="140%" height="200%">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0.3" />
        <feComposite operator="in" in2="SourceGraphic" />
      </filter>
    </defs>

    <!-- 底層粗線 -->
    <path
      d="M 5 16 C 60 22, 120 10, 180 16 S 260 20, 295 14"
      :stroke="color"
      :stroke-width="stroke"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
      filter="url(#crayon-noise)"
      opacity="0.95"
    />
    <!-- 疊一層半透明線條 -->
    <path
      d="M 5 18 C 60 24, 120 12, 180 18 S 260 22, 295 16"
      :stroke="color"
      :stroke-width="stroke * 0.6"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
      opacity="0.6"
    />
  </svg>
</template>

<script setup>
  import { toRefs } from 'vue'

  const _props = defineProps({
    color: { type: String, default: '#E59D2C' },
    height: { type: Number, default: 22 },
    stroke: { type: Number, default: 10 }
  })

  // 取出為 ref，讓模板可直接用 color / height / stroke
  const { color, height, stroke } = toRefs(_props)
</script>
