<template>
  <address class="not-italic flex flex-wrap gap-3">
    <!-- Email -->
    <a
      :href="`mailto:${email}`"
      class="inline-flex items-center gap-2 px-3 py-1 text-sm transition hover:-translate-y-0.5"
      :title="email"
    >
      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16v12H4zM22 6l-10 7L2 6"
        />
      </svg>
      <span v-if="showLabel">{{ email }}</span>
      <span class="sr-only">Email</span>
    </a>

    <!-- Phone -->
    <a
      :href="`tel:${digits(tel)}`"
      class="inline-flex items-center gap-2 px-3 py-1 text-sm transition hover:-translate-y-0.5"
      :title="fmtTel(tel)"
    >
      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.31 1.77.57 2.61a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.47-1.09a2 2 0 0 1 2.11-.45c.84.26 1.71.45 2.61.57A2 2 0 0 1 22 16.92z"
        />
      </svg>
      <!-- 這裡改成分段後的顯示 -->
      <span v-if="showLabel">{{ fmtTel(tel) }}</span>
      <span class="sr-only">Phone</span>
    </a>
  </address>
</template>

<script setup>
  const props = defineProps({
    email: { type: String, default: 'ninaaaaa1327@gmail.com' },
    tel: { type: String, default: '0905862327' }, // 不分段或分段都可，畫面會自動處理
    showLabel: { type: Boolean, default: true }
  })

  // 取純數字（給 tel: 連結用）
  const digits = (s = '') => s.replace(/\D/g, '')

  // 畫面顯示字串分段（台灣常見格式）
  const fmtTel = (s = '') => {
    if (!s) return ''
    // 如果父層已分好（含 '-' 或空白），就照原樣顯示
    if (/[-\s]/.test(s)) return s

    const d = digits(s)
    if (d.startsWith('09') && d.length === 10)
      return `${d.slice(0, 4)}-${d.slice(4, 7)}-${d.slice(7)}`
    if (d.startsWith('02') && d.length === 10)
      return `${d.slice(0, 2)}-${d.slice(2, 6)}-${d.slice(6)}`
    if (/^0[3-8]/.test(d) && d.length === 9)
      return `${d.slice(0, 3)}-${d.slice(3, 6)}-${d.slice(6)}`
    if (d.length >= 7 && d.length <= 8) return `${d.slice(0, 4)}-${d.slice(4)}`
    return s
  }
</script>
