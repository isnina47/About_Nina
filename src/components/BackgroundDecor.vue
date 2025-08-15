<template>
  <!-- 只渲染在卡片內層，會被父層 overflow-hidden 裁切 -->
  <div
    class="absolute inset-0 -z-10 pointer-events-none grid-paper"
    :style="{
      '--grid-bg': bg,
      '--grid-size': gridSize + 'px',
      '--grid-thin': gridThinColor,
      '--grid-bold': gridBoldColor
    }"
    aria-hidden="true"
  />
</template>

<script setup>
  const props = defineProps({
    // 背景底色（很淡的米白/灰白）
    bg: { type: String, default: '#fff' },
    // 小格的邊長（px）
    gridSize: { type: Number, default: 26 },
    // 細格線顏色（建議用你的配色帶透明度）
    gridThinColor: { type: String, default: 'rgba(146,161,195,.18)' }, // #92A1C3 20%透明
    // 粗格線顏色（每 5 格一條）
    gridBoldColor: { type: String, default: 'rgba(146,161,195,.32)' }
  })
</script>

<style scoped>
  /* 淡色網格（細格＋每5格粗線），隨容器尺寸自適應 */
  .grid-paper {
    background-color: var(--grid-bg);
    background-image:
    /* 細格：直線、橫線 */
      linear-gradient(to right, var(--grid-thin) 1px, transparent 1px),
      linear-gradient(to bottom, var(--grid-thin) 1px, transparent 1px),
      /* 粗格：每5格一條直線、橫線 */
        linear-gradient(to right, var(--grid-bold) 1px, transparent 1px),
      linear-gradient(to bottom, var(--grid-bold) 1px, transparent 1px);
    background-size:
      var(--grid-size) var(--grid-size),
      var(--grid-size) var(--grid-size),
      calc(var(--grid-size) * 5) calc(var(--grid-size) * 5),
      calc(var(--grid-size) * 5) calc(var(--grid-size) * 5);
    /* 讓線條更銳利（避免瀏覽器抗鋸齒模糊） */
    image-rendering: -webkit-optimize-contrast;
  }
</style>
