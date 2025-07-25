<template>
  <ul class="space-y-3">
    <li
      v-for="(msg, idx) in messages"
      :key="idx"
      class="border-l-4 pl-4 border-gray-500 p-4 bg-white/50 shadow-md rounded"
    >
      <!-- 暱稱 -->
      <p class="text-title font-semibold mb-1">{{ msg.name }}：</p>

      <!-- 分隔線 -->
      <div class="border-b border-dashed border-gray-300 mb-2"></div>

      <!-- 留言內容 -->
      <!-- tracking-wide = letter-spacing: 0.025em -->
      <p class="text-text leading-relaxed tracking-wide break-words">{{ msg.content }}</p>
      <!-- 時間戳記 -->
      <p class="text-xs text-textLight mt-2 text-right italic">{{ formatDate(msg.createdAt) }}</p>
    </li>
  </ul>
</template>

<script setup>
  const props = defineProps({
    messages: Array
  })

  const formatDate = iso => new Date(iso).toLocaleString()
</script>
