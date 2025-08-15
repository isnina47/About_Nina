<!-- Header.vue -->
<template>
  <header
    class="w-full sticky top-0 z-50 h-16 bg-header border-t border-b border-black px-6 flex items-center"
  >
    <!-- 左側：品牌 -->
    <router-link to="/" class="text-xl text-title font-semibold">About Nina</router-link>

    <!-- 右側：桌機選單 -->
    <nav aria-label="Primary" class="ml-auto hidden md:flex gap-6 text-title font-medium">
      <!-- HOME -->
      <router-link
        to="/"
        class="relative group hover:text-textHover font-semibold transition"
        exact-active-class="text-textHover"
      >
        HOME
        <span
          class="absolute left-1/2 -translate-x-1/2 top-full mt-1 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap"
        >
          首頁
        </span>
      </router-link>

      <!-- RESUME -->
      <router-link
        to="/resume"
        class="relative group hover:text-textHover font-semibold transition"
        active-class="text-textHover"
      >
        RESUME
        <span
          class="absolute left-1/2 -translate-x-1/2 top-full mt-1 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap"
        >
          履歷
        </span>
      </router-link>

      <!-- PROJECTS -->
      <router-link
        to="/portfolio"
        class="relative group hover:text-textHover font-semibold transition"
        active-class="text-textHover"
      >
        PROJECTS
        <span
          class="absolute left-1/2 -translate-x-1/2 top-full mt-1 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap"
        >
          作品集
        </span>
      </router-link>
    </nav>

    <!-- 漢堡按鈕（手機） -->
    <button
      type="button"
      class="ml-auto md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black"
      :aria-expanded="isOpen ? 'true' : 'false'"
      aria-controls="mobile-menu"
      @click="toggle()"
    >
      <span class="sr-only">Toggle menu</span>
      <!-- icon 切換 -->
      <svg
        v-if="!isOpen"
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 text-title"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 text-title"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </header>

  <!-- 手機選單 -->
  <transition
    enter-active-class="transition ease-out duration-200"
    enter-from-class="opacity-0 -translate-y-2"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition ease-in duration-150"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-2"
  >
    <div
      v-show="isOpen"
      id="mobile-menu"
      class="md:hidden sticky top-16 z-40 border-b border-black bg-header"
    >
      <!-- 這裡加 text-center -->
      <nav class="px-6 py-4 flex flex-col gap-3 text-title font-semibold text-center">
        <!-- 這裡加 w-full（讓 hover 背景滿版） -->
        <router-link
          to="/"
          class="block w-full py-2 px-2 rounded hover:bg-black/5 hover:text-textHover transition"
          exact-active-class="text-textHover"
          @click="close()"
        >
          HOME
        </router-link>
        <router-link
          to="/resume"
          class="block w-full py-2 px-2 rounded hover:bg-black/5 hover:text-textHover transition"
          active-class="text-textHover"
          @click="close()"
        >
          RESUME
        </router-link>
        <router-link
          to="/portfolio"
          class="block w-full py-2 px-2 rounded hover:bg-black/5 hover:text-textHover transition"
          active-class="text-textHover"
          @click="close()"
        >
          PROJECTS
        </router-link>
      </nav>
    </div>
  </transition>

  <!-- 背景遮罩（點擊關閉） -->
  <transition
    enter-active-class="transition-opacity duration-200"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-150"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-show="isOpen" class="fixed inset-0 z-30 bg-black/30 md:hidden" @click="close()" />
  </transition>
</template>

<script setup>
  import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
  import { useRoute } from 'vue-router'

  const isOpen = ref(false)
  const toggle = () => (isOpen.value = !isOpen.value)
  const close = () => (isOpen.value = false)

  const route = useRoute()
  // 路由切換自動收合
  watch(
    () => route.fullPath,
    () => close()
  )

  // Esc 關閉
  const onKeydown = e => {
    if (e.key === 'Escape') close()
  }
  onMounted(() => window.addEventListener('keydown', onKeydown))
  onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))

  // 開啟時鎖捲動
  watch(isOpen, v => {
    document.documentElement.classList.toggle('overflow-hidden', v)
  })
</script>
