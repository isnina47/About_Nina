<template>
  <!-- 全螢幕固定於底層；滾動時依然鋪滿 -->
  <div
    class="fixed inset-0 -z-10 pointer-events-none grid-paper"
    :style="{
      '--grid-bg': bg,
      '--grid-size': gridSize + 'px',
      '--grid-thin': thin,
      '--grid-bold': bold
    }"
    aria-hidden="true"
  />
</template>

<script setup>
  const props = defineProps({
    bg: { type: String, default: '#ffffff' }, // 底色
    gridSize: { type: Number, default: 26 }, // 小格距
    thin: { type: String, default: 'rgba(146,161,195,.18)' }, // 細線：#92A1C3, 18%
    bold: { type: String, default: 'rgba(146,161,195,.32)' } // 粗線：每5格
  })
</script>

<style scoped>
  .grid-paper {
    background-color: var(--grid-bg);
    background-image:
      linear-gradient(to right, var(--grid-thin) 1px, transparent 1px),
      linear-gradient(to bottom, var(--grid-thin) 1px, transparent 1px),
      linear-gradient(to right, var(--grid-bold) 1px, transparent 1px),
      linear-gradient(to bottom, var(--grid-bold) 1px, transparent 1px);
    background-size:
      var(--grid-size) var(--grid-size),
      var(--grid-size) var(--grid-size),
      calc(var(--grid-size) * 5) calc(var(--grid-size) * 5),
      calc(var(--grid-size) * 5) calc(var(--grid-size) * 5);
    image-rendering: -webkit-optimize-contrast;
  }
</style>
