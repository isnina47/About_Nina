<!-- 
MessageForm 發送留言 → 傳給 MessageBoard
MessageBoard 加入到 messages 陣列
MessageList 透過 props 接收 messages 渲染列表
 -->

<!-- MessageBoard.vue -->
<template>
  <section class="mt-12 animate__animated animate__fadeIn animate__fast animate__delay-2s">
    <div class="max-w-3xl mx-auto bg-white/70 rounded-2xl shadow-sm border border-border p-6">
      <!-- 標題列 -->
      <div class="flex items-center justify-between">
        <h2 class="text-xl font-bold text-title">💬 留言給 Nina</h2>
        <span
          class="text-xs px-2 py-0.5 rounded-full bg-[#FFD3DD] border border-btnborder text-title"
          v-if="!loading && !error"
        >
          {{ messages.length }} 則
        </span>
      </div>

      <!-- 留言表單 -->
      <MessageForm class="mt-4" @submit-message="addMessage" />

      <!-- 狀態區：載入中 -->
      <div v-if="loading" class="mt-6 flex items-center gap-3 text-textLight" aria-live="polite">
        <svg
          class="h-5 w-5 animate-spin"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" stroke-width="2" class="opacity-25"></circle>
          <path d="M12 3a9 9 0 0 1 9 9" stroke-width="2" class="opacity-75"></path>
        </svg>
        <span>載入中…</span>
      </div>

      <!-- 狀態區：錯誤 -->
      <div
        v-else-if="error"
        class="mt-6 rounded-lg border border-red-200 bg-red-50 text-red-700 p-4 text-sm"
        aria-live="assertive"
      >
        讀取留言失敗，請稍後再試。
      </div>

      <!-- 留言清單 -->
      <div v-else-if="messages.length" class="mt-8">
        <!-- 用分隔線讓每則留言間距一致；MessageList 內部無需改動 -->
        <div class="divide-y divide-border">
          <MessageList
            :messages="messages"
            @delete-message="deleteMessage"
            @edit-message="editMessage"
          />
        </div>
      </div>

      <!-- 空狀態 -->
      <div
        v-else
        class="mt-6 rounded-lg border border-dashed border-border bg-white/60 p-6 text-center text-textLight text-sm"
      >
        目前尚無留言，歡迎和我互動！
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import MessageForm from './MessageForm.vue'
  import MessageList from './MessageList.vue'
  import Swal from 'sweetalert2'

  const messages = ref([])
  const loading = ref(true)
  const error = ref(false)

  const API_URL = 'https://68830e8221fa24876a9c7400.mockapi.io/messages'

  // 讀取留言
  const fetchMessages = async () => {
    loading.value = true
    error.value = false
    try {
      const res = await fetch(API_URL)
      if (!res.ok) throw new Error('network')
      const data = await res.json()
      messages.value = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    } catch (err) {
      console.error('❌ 讀取留言失敗:', err)
      error.value = true
    } finally {
      loading.value = false
    }
  }

  // 新增留言
  const addMessage = async msg => {
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(msg)
      })
      const newMsg = await res.json()
      messages.value.unshift(newMsg)
    } catch (err) {
      console.error('❌ 新增留言失敗', err)
    }
  }

  // 刪除留言
  const deleteMessage = async id => {
    const result = await Swal.fire({
      title: '確定要刪除留言嗎？',
      text: '刪除後將無法恢復留言內容',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '刪除',
      cancelButtonText: '取消',
      reverseButtons: true,
      customClass: {
        popup: 'rounded-lg shadow-xl',
        title: 'text-lg font-semibold text-title',
        text: 'text-text',
        confirmButton: 'bg-red-800 text-white px-4 py-2 rounded hover:bg-red-900',
        cancelButton: 'bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300'
      },
      buttonsStyling: false
    })
    if (!result.isConfirmed) return

    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' })
      messages.value = messages.value.filter(msg => msg.id !== id)
      Swal.fire({
        icon: 'success',
        title: '留言已刪除',
        timer: 2000,
        showConfirmButton: false,
        customClass: { popup: 'rounded-lg shadow-md', title: 'text-lg font-semibold' }
      })
    } catch (err) {
      console.error('❌ 刪除留言失敗', err)
    }
  }

  // 編輯留言
  const editMessage = async (id, newContent) => {
    try {
      const target = messages.value.find(msg => msg.id === id)
      if (!target) return
      const updatedMsg = { ...target, content: newContent }
      const res = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedMsg)
      })
      const updatedData = await res.json()
      messages.value = messages.value.map(msg => (msg.id === id ? updatedData : msg))
      Swal.fire({ icon: 'success', title: '留言已更新', timer: 2100, showConfirmButton: false })
    } catch (err) {
      console.error('❌ 編輯留言失敗:', err)
    }
  }

  onMounted(fetchMessages)
</script>
