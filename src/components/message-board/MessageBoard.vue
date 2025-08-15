<!-- 
MessageForm 發送留言 → 傳給 MessageBoard
MessageBoard 加入到 messages 陣列
MessageList 透過 props 接收 messages 渲染列表
 -->

<template>
  <section class="mt-12 animate__animated animate__fadeIn animate__fast animate__delay-2s">
    <h2 class="text-2xl font-bold mb-4">💬 留言給 Nina</h2>
    <!-- 留言表單 -->
    <MessageForm @submit-message="addMessage" />

    <!-- 留言清單 : 若 msg 有內容則顯示，監聽 刪除訊息 事件 -->
    <div v-if="messages.length" class="mt-8 space-y-6">
      <MessageList
        :messages="messages"
        @delete-message="deleteMessage"
        @edit-message="editMessage"
      />
    </div>
    <!-- 無留言提示訊息 -->
    <div v-else class="mt-4 text-textLight text-sm">目前尚無留言，歡迎和我互動！</div>
  </section>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import MessageForm from './MessageForm.vue'
  import MessageList from './MessageList.vue'
  import Swal from 'sweetalert2'

  //   建立留言清單的狀態（空陣列
  const messages = ref([]) // 儲存從 API 拿回來的留言清單

  //   使用 MockAPI 資源
  const API_URL = 'https://68830e8221fa24876a9c7400.mockapi.io/messages'

  // 讀取留言 (GET)
  // 頁面載入時呼叫此函式。透過 fetch() 向 API 發送 GET 請求取得留言資料
  const fetchMessages = async () => {
    try {
      const res = await fetch(API_URL)
      const data = await res.json()

      // 將留言依照時間 新到舊 排序
      messages.value = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    } catch (err) {
      console.error('❌ 讀取留言失敗:', err)
    }
  }

  //   新增留言 (POST)
  const addMessage = async msg => {
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(msg)
      })
      const newMsg = await res.json()
      messages.value.unshift(newMsg) // 插入到第一筆
      // unshift() 將資料放到陣列最前面
    } catch (err) {
      console.error('❌ 新增留言失敗', err)
    }
  }

  //   刪除留言 (delete) ，使用 sweetalert 確認提示
  //   fetch(url, { method: 'DELETE' }) 刪除後端 (mockAPI) 資料
  //   filter 篩選不等於該 id 資料
  const deleteMessage = async id => {
    const result = await Swal.fire({
      title: '確定要刪除這則留言嗎？',
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

    if (!result.isConfirmed) return // 使用者取消刪除

    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
      })
      messages.value = messages.value.filter(msg => msg.id !== id)

      // 刪除成功提示
      Swal.fire({
        icon: 'success',
        title: '留言已刪除',
        timer: 2000,
        showConfirmButton: false,
        customClass: {
          popup: 'rounded-lg shadow-md',
          title: 'text-lg font-semibold'
        }
      })
    } catch (err) {
      console.error('❌ 刪除留言失敗', err)
    }
  }

  /**
   * 編輯留言 (PUT)
   */
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

      Swal.fire({
        icon: 'success',
        title: '留言已更新',
        timer: 2100,
        showConfirmButton: false
      })
    } catch (err) {
      console.error('❌ 編輯留言失敗:', err)
    }
  }

  //   頁面初始化載入留言
  onMounted(fetchMessages)
</script>
