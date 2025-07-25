<template>
  <ul class="space-y-3">
    <li
      v-for="(msg, idx) in messages"
      :key="idx"
      class="border-l-4 pl-4 border-gray-500 p-4 bg-white/50 shadow-md rounded relative"
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
      <!-- 刪除鈕 （SVG + hover）-->
      <button
        class="absolute top-2 right-2 p-1"
        @click="$emit('delete-message', msg.id)"
        aria-label="刪除留言"
        title="刪除留言"
      >
        <svg
          class="w-6 h-6 hover:text-red-800 transition"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3m-4 0h14"
          />
        </svg>
      </button>
    </li>
  </ul>
</template>

<script setup>
  const props = defineProps({
    messages: Array // 接收父層傳入的留言陣列
  })
  // 格式化時間: 轉換 ISO 時間為本地時間字串
  const formatDate = iso => new Date(iso).toLocaleString()
</script>
