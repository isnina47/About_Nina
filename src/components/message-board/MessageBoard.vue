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

    <!-- 留言清單 -->
    <div v-if="messages.length" class="mt-8 space-y-6">
      <MessageList :messages="messages" />
    </div>
    <!-- 無留言提示訊息 -->
    <div v-else class="mt-4 text-textLight text-sm">目前尚無留言，歡迎和我互動！</div>
  </section>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import MessageForm from './MessageForm.vue'
  import MessageList from './MessageList.vue'

  const messages = ref([]) // 儲存留言清單

  const fetchMessages = async () => {
    messages.value = [] // 預留: 可串接 API
  }

  //   接收子元件 留言表單 傳來的留言資料，加入列表最前面
  const addMessage = msg => {
    messages.value.unshift(msg)
  }

  onMounted(fetchMessages)
</script>
