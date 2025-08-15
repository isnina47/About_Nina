<template>
  <ul class="space-y-4">
    <li
      v-for="msg in messages"
      :key="msg.id"
      class="relative rounded-xl border border-btnborder bg-white/70 p-4 shadow-sm"
    >
      <!-- 頂部：暱稱 + 日期 + 操作 -->
      <header class="flex items-start gap-3">
        <span
          class="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-btn shrink-0"
          aria-hidden="true"
        ></span>
        <div class="flex-1 min-w-0">
          <p class="text-title font-semibold truncate">{{ msg.name }}</p>
          <time class="block text-xs text-textLight mt-0.5">{{ formatDate(msg.createdAt) }}</time>
        </div>

        <div class="flex items-center gap-1">
          <!-- 編輯 -->
          <button class="icon-btn" @click="startEdit(msg)" aria-label="編輯留言" title="編輯留言">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M18 7l-11 11H5v-2L16 5l2 2z"
              />
            </svg>
          </button>
          <!-- 刪除 -->
          <button
            class="icon-btn"
            @click="$emit('delete-message', msg.id)"
            aria-label="刪除留言"
            title="刪除留言"
          >
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862A2 2 0 015.995 19.142L5 7m5 4v6m4-6v6M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3m-7 0h10"
              />
            </svg>
          </button>
        </div>
      </header>

      <!-- 內容：顯示 / 編輯 -->
      <div class="mt-3" v-if="editingId !== msg.id">
        <p class="text-text leading-relaxed whitespace-pre-wrap break-words">
          {{ msg.content }}
        </p>
      </div>

      <div v-else class="mt-3">
        <textarea
          ref="editRef"
          v-model="editContent"
          rows="3"
          @input="autoResize"
          class="w-full bg-white border border-border rounded px-3 py-2 text-sm leading-relaxed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-btnborder focus-visible:ring-offset-2 focus-visible:ring-offset-white resize-none overflow-hidden"
        ></textarea>
        <div class="mt-3 flex flex-wrap gap-2">
          <button
            class="inline-flex items-center px-3 py-1.5 rounded bg-btn text-btnText border border-btnborder hover:bg-btnHover transition"
            @click="saveEdit(msg.id)"
          >
            儲存
          </button>
          <button
            class="inline-flex items-center px-3 py-1.5 rounded bg-white text-title border border-btnborder hover:bg-btnHover/20 transition"
            @click="cancelEdit"
          >
            取消
          </button>
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup>
  import { ref, nextTick } from 'vue'

  const props = defineProps({
    messages: { type: Array, default: () => [] }
  })
  const emit = defineEmits(['delete-message', 'edit-message'])

  const editingId = ref(null)
  const editContent = ref('')
  const editRef = ref(null)

  const startEdit = msg => {
    editingId.value = msg.id
    editContent.value = msg.content
    nextTick(() => autoResize())
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

  const autoResize = () => {
    const el = editRef.value
    if (!el) return
    el.style.height = 'auto'
    el.style.height = el.scrollHeight + 'px'
  }

  const formatDate = iso => {
    try {
      return new Date(iso).toLocaleString('zh-TW', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      })
    } catch {
      return iso
    }
  }
</script>

<style scoped>
  .icon-btn {
    @apply inline-flex items-center justify-center rounded-md border border-btnborder bg-white p-1.5
         hover:bg-btnHover/20 transition
         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-btnborder
         focus-visible:ring-offset-2 focus-visible:ring-offset-white;
  }
</style>
