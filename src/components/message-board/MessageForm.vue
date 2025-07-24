<template>
  <form @submit.prevent="handleSubmit" class="mb-6 space-y-4">
    <input v-model="name" placeholder="暱稱" class="w-full border px-3 py-2 rounded" />
    <textarea
      v-model="content"
      placeholder="留言內容"
      rows="3"
      class="w-full border px-3 py-2 rounded"
    ></textarea>
    <button
      type="submit"
      class="px-4 py-2 bg-btn border border-btnborder text-btnText rounded hover:bg-btnHover"
    >
      送出留言
    </button>
  </form>
</template>

<script setup>
  import { ref } from 'vue'
  const emit = defineEmits(['submit-message'])

  const name = ref('')
  const content = ref('')

  const handleSubmit = () => {
    if (!name.value.trim() || !content.value.trim()) return
    const msg = {
      name: name.value,
      content: content.value,
      createdAt: new Date().toISOString()
    }
    emit('submit-message', msg)
    name.value = ''
    content.value = ''
  }
</script>
