<template>
  <section class="mt-12 px-4">
    <h2 class="text-2xl font bold mb-4 text-center">💬 留言給 Nina</h2>
    <MessageForm @submit-message="addMessage" />
    <MessageList :messages="messages" />
  </section>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import MessageForm from './MessageForm.vue'
  import MessageList from './MessageList.vue'

  const messages = ref([])

  const fetchMessages = async () => {
    messages.value = [] // 預留: 可串接 API
  }

  const addMessage = msg => {
    messages.value.unshift(msg)
  }

  onMounted(fetchMessages)
</script>
