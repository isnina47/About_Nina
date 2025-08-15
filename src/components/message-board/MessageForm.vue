<template>
  <form @submit.prevent="handleSubmit" class="mb-6 space-y-4">
    <!-- 暱稱 -->
    <label class="sr-only" for="name">暱稱</label>
    <input
      id="name"
      ref="nameRef"
      v-model="name"
      :maxlength="MAX_NAME"
      placeholder="暱稱"
      class="w-full bg-white/90 border border-border px-4 py-2 rounded placeholder:text-textLight text-title focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-btnborder focus-visible:ring-offset-2 focus-visible:ring-offset-white"
      aria-describedby="name-hint"
    />
    <div id="name-hint" class="text-[12px] text-textLight">{{ name.length }} / {{ MAX_NAME }}</div>

    <!-- 留言 -->
    <label class="sr-only" for="content">想說的話</label>
    <textarea
      id="content"
      ref="textareaRef"
      v-model="content"
      :maxlength="MAX_CONTENT"
      placeholder="想說的話"
      rows="3"
      @input="autoResize"
      class="w-full bg-white/90 border border-border px-4 py-2 rounded placeholder:text-textLight text-title leading-relaxed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-btnborder focus-visible:ring-offset-2 focus-visible:ring-offset-white resize-none overflow-hidden"
      aria-describedby="content-hint"
    ></textarea>
    <div id="content-hint" class="text-[12px] text-textLight">
      {{ content.length }} / {{ MAX_CONTENT }}（支援 Ctrl/⌘ + Enter 送出）
      <!-- macOS 用 ⌘（Command）+ Enter 就能快速送出 -->
    </div>

    <!-- 送出 -->
    <button
      type="submit"
      :disabled="isSubmitting"
      class="inline-flex items-center gap-2 px-4 py-2 bg-btn border border-btnborder text-btnText rounded hover:bg-btnHover transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-btnborder focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-60 disabled:cursor-not-allowed"
      @keydown.enter.exact.stop
    >
      <span v-if="!isSubmitting">送出留言</span>
      <span v-else>送出中…</span>
      <svg
        v-if="isSubmitting"
        class="h-4 w-4 animate-spin"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" stroke-width="2" class="opacity-25"></circle>
        <path d="M12 3a9 9 0 0 1 9 9" stroke-width="2" class="opacity-75"></path>
      </svg>
    </button>
  </form>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import Swal from 'sweetalert2'

  const emit = defineEmits(['submit-message'])

  const MAX_NAME = 20
  const MAX_CONTENT = 300

  const name = ref('')
  const content = ref('')
  const isSubmitting = ref(false)

  const nameRef = ref(null)
  const textareaRef = ref(null)

  onMounted(() => {
    // 初始化自動高度
    autoResize()
  })

  const autoResize = () => {
    const el = textareaRef.value
    if (!el) return
    el.style.height = 'auto'
    el.style.height = el.scrollHeight + 'px'
  }

  // Ctrl/⌘ + Enter 快速送出
  const onHotkeySubmit = e => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault()
      handleSubmit()
    }
  }
  document.addEventListener('keydown', onHotkeySubmit)

  import { onBeforeUnmount } from 'vue'
  onBeforeUnmount(() => {
    document.removeEventListener('keydown', onHotkeySubmit)
  })

  const handleSubmit = async () => {
    if (isSubmitting.value) return

    // 基本驗證
    if (!name.value.trim() || !content.value.trim()) {
      await Swal.fire({
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
      ;(name.value ? textareaRef.value : nameRef.value)?.focus()
      return
    }

    // 確認送出
    const result = await Swal.fire({
      title: '確定要送出這則留言嗎？',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: '送出',
      cancelButtonText: '取消',
      reverseButtons: true,
      customClass: {
        popup: 'rounded-lg shadow-xl',
        title: 'text-lg font-semibold',
        confirmButton: 'bg-btn text-btnText px-4 py-2 rounded hover:bg-btnHover',
        cancelButton: 'bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300'
      },
      buttonsStyling: false
    })
    if (!result.isConfirmed) return

    isSubmitting.value = true
    try {
      const msg = {
        name: name.value.trim(),
        content: content.value.trim(),
        createdAt: new Date().toISOString()
      }
      emit('submit-message', msg)

      name.value = ''
      content.value = ''
      autoResize()
      nameRef.value?.focus()

      await Swal.fire({
        icon: 'success',
        title: '留言成功！',
        customClass: { popup: 'rounded-lg shadow-md', title: 'text-lg font-semibold' },
        timer: 1800,
        showConfirmButton: false
      })
    } catch (err) {
      console.error(err)
    } finally {
      isSubmitting.value = false
    }
  }
</script>
