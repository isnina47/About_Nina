<!-- 
MessageForm 發送留言 → 傳給 MessageBoard
MessageBoard 加入到 messages 陣列
MessageList 透過 props 接收 messages 渲染列表
 -->

<template>
  <section class="mt-12 animate__animated animate__fadeIn animate__fast animate__delay-4s">
    <h2 class="text-2xl font-bold mb-4">💬 留言給 Nina</h2>
    <!-- 留言表單 -->
    <MessageForm @submit-message="addMessage" />

    <!-- 留言清單 : 若 msg 有內容則顯示，監聽 刪除訊息 事件 -->
    <div v-if="messages.length" class="mt-8 space-y-6">
      <MessageList :messages="messages" @delete-message="deleteMessage" />
    </div>
    <!-- 無留言提示訊息 -->
    <div v-else class="mt-4 text-textLight text-sm">目前尚無留言，歡迎和我互動！</div>
  </section>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import MessageForm from './MessageForm.vue'
  import MessageList from './MessageList.vue'

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

  //   刪除留言 (delete)
  //   fetch(url, { method: 'DELETE' }) 刪除後端 (mockAPI) 資料
  //   filter 篩選不等於該 id 資料
  const deleteMessage = async id => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
      })
      messages.value = messages.value.filter(msg => msg.id !== id)
    } catch (err) {
      console.error('❌ 刪除留言失敗', err)
    }
  }
  //   頁面載入時自動取得留言
  onMounted(fetchMessages)
</script>
