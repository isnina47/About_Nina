<template>
  <address class="not-italic flex flex-wrap gap-3">
    <a
      :href="`mailto:${email}`"
      class="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm border-btnborder bg-[#FFD3DD]/80 hover:bg-[#FFD3DD] transition"
    >
      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16v12H4zM22 6l-10 7L2 6"
        />
      </svg>
      <span v-if="showLabel">Email</span>
      <span class="sr-only">Email</span>
    </a>

    <a
      :href="`tel:${tel}`"
      class="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm border-btnborder bg-[#BED1E3]/80 hover:bg-[#BED1E3] transition"
    >
      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07
                 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18
                 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.31 1.77.57 2.61
                 a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.47-1.09
                 a2 2 0 0 1 2.11-.45c.84.26 1.71.45 2.61.57A2 2 0 0 1 22 16.92z"
        />
      </svg>
      <span v-if="showLabel">Call</span>
      <span class="sr-only">Phone</span>
    </a>
  </address>
</template>

<script setup>
  const props = defineProps({
    email: { type: String, default: 'ninaaaaa1327@gmail.com' },
    tel: { type: String, default: '0905862327' },
    showLabel: { type: Boolean, default: true } // 要不要顯示文字（只顯示圖示時可關掉）
  })
</script>
