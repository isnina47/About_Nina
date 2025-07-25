<template>
  <form @submit.prevent="handleSubmit" class="mb-6 space-y-4">
    <input
      v-model="name"
      placeholder="暱稱"
      class="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
    />
    <textarea
      v-model="content"
      placeholder="想說的話"
      rows="3"
      class="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
    ></textarea>
    <button
      type="submit"
      class="px-4 py-2 bg-btn border border-btnborder text-btnText rounded hover:bg-btnHover transition"
    >
      送出留言
    </button>
  </form>
</template>

<script setup>
  import { ref } from 'vue'
  const emit = defineEmits(['submit-message']) // 宣告要向父元件 msgboard 觸發事件

  const name = ref('')
  const content = ref('')

  //  表單送出時出發
  const handleSubmit = () => {
    if (!name.value.trim() || !content.value.trim()) return // 防止空白提交
    const msg = {
      name: name.value,
      content: content.value,
      createdAt: new Date().toISOString()
    }
    emit('submit-message', msg) // 將留言傳給父元件
    name.value = ''
    content.value = ''
    // 清空欄位
  }
</script>
