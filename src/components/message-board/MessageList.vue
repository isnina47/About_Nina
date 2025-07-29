<template>
  <ul class="space-y-3">
    <li
      v-for="(msg, idx) in messages"
      :key="msg.id"
      class="border-l-4 pl-4 border-gray-500 p-4 bg-white/50 shadow-md rounded relative"
    >
      <!-- 暱稱 -->
      <p class="text-title font-semibold mb-1">{{ msg.name }}：</p>
      <div class="border-b border-dashed border-gray-300 mb-2"></div>

      <!-- 編輯中：顯示輸入框 -->
      <div v-if="editingId === msg.id">
        <textarea
          v-model="editContent"
          class="w-full border rounded px-2 py-1 text-sm"
          rows="3"
        ></textarea>
        <div class="mt-2 flex gap-2">
          <button
            class="bg-[#1c63b0] text-white px-3 py-1 rounded hover:bg-[#1c4bb0]"
            @click="saveEdit(msg.id)"
          >
            儲存
          </button>
          <button
            class="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
            @click="cancelEdit"
          >
            取消
          </button>
        </div>
      </div>

      <!-- 非編輯狀態：顯示留言內容 -->
      <div v-else>
        <p class="text-text leading-relaxed tracking-wide break-words">{{ msg.content }}</p>
        <p class="text-xs text-textLight mt-2 text-right italic">{{ formatDate(msg.createdAt) }}</p>
        <!-- 編輯按鈕 -->
        <button
          class="absolute top-2 right-10 p-1"
          @click="startEdit(msg)"
          aria-label="編輯留言"
          title="編輯留言"
        >
          ✏️
        </button>
        <!-- 刪除按鈕 -->
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
      </div>
    </li>
  </ul>
</template>

<script setup>
  import { ref } from 'vue'

  const props = defineProps({
    messages: Array
  })
  const emit = defineEmits(['delete-message', 'edit-message'])

  const editingId = ref(null)
  const editContent = ref('')

  // 點擊編輯按鈕
  const startEdit = msg => {
    editingId.value = msg.id
    editContent.value = msg.content
  }

  const cancelEdit = () => {
    editingId.value = null
    editContent.value = ''
  }

  const saveEdit = id => {
    if (!editContent.value.trim()) return
    emit('edit-message', id, editContent.value.trim())
    cancelEdit()
  }

  // 格式化時間
  const formatDate = iso => new Date(iso).toLocaleString()
</script>
