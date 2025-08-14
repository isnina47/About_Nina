<template>
  <h2 class="mb-6">
    <span
      class="inline-flex items-center rounded-full border-2 font-extrabold tracking-wider uppercase shadow-sm"
      :class="sizeClass"
      :style="{ background: bg, borderColor: border, color: text }"
    >
      <slot />
    </span>
  </h2>
</template>

<script setup>
  import { computed } from 'vue'

  const props = defineProps({
    bg: { type: String, default: '#BED1E3' }, // 預設 mist blue
    border: { type: String, default: '#92A1C3' }, // periwinkle
    text: { type: String, default: '#2d2d2d' },
    size: { type: String, default: 'md' } // 'sm' | 'md' | 'lg'
  })

  const sizeClass = computed(() => {
    return props.size === 'lg'
      ? 'px-5 py-1.5 text-base'
      : props.size === 'sm'
        ? 'px-3 py-0.5 text-sm'
        : 'px-4 py-1 text-[0.95rem]'
  })
</script>
