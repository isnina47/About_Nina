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
  import Swal from 'sweetalert2'

  const emit = defineEmits(['submit-message']) // 向父元件 msgboard 觸發事件

  // 表單輸入內容
  const name = ref('')
  const content = ref('')

  //  表單送出時觸發
  const handleSubmit = async () => {
    if (!name.value.trim() || !content.value.trim()) {
      // 驗證是否有輸入內容（trim 去除空白
      Swal.fire({
        icon: 'warning',
        title: '請填寫暱稱與留言內容！',
        confirmButtonText: '沒問題',
        customClass: {
          popup: 'rounded-lg shadow-md',
          title: 'text-lg font-semibold',
          confirmButton: 'bg-btn text-btnText px-4 py-2 rounded hover:bg-btnHover'
        },
        buttonsStyling: false
      })
      return
    }

    //  彈出確認對話框 sweetalert
    const result = await Swal.fire({
      title: '確定要送出這則留言嗎？',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: '送出',
      cancelButtonText: '取消',
      reverseButtons: true,
      customClass: {
        popup: 'rounded-lg shadow-xl',
        title: 'text-lg font-semibold ',
        confirmButton: 'bg-btn text-btnText px-4 py-2 rounded hover:bg-btnHover', // 確定按鈕
        cancelButton: 'bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300' // 取消按鈕
      },
      buttonsStyling: false // 關閉預設樣式
    })

    // ✅ 若使用者點「取消」就中止送出
    if (!result.isConfirmed) return

    //  準備留言資料物件
    const msg = {
      name: name.value.trim(),
      content: content.value.trim(),
      createdAt: new Date().toISOString()
    }
    emit('submit-message', msg) // 將留言傳給父元件

    // 清空表單欄位
    name.value = ''
    content.value = ''

    //  顯示送出成功提示
    Swal.fire({
      icon: 'success',
      title: '留言成功！',
      customClass: {
        popup: 'rounded-lg shadow-md',
        title: 'text-lg font-semibold'
      },
      timer: 2000,
      showConfirmButton: false
    })
  }
</script>
