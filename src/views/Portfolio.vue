<script setup>
  import { ref, computed, onMounted } from 'vue'

  const activeCategory = ref('全部') // 綁定按鈕類別 預設先顯示全部作品
  const showAnimation = ref(true)

  onMounted(() => {
    setTimeout(() => {
      showAnimation.value = false
    }, 2000) // 元件掛載後，2秒後將動畫設為 false，用於觸發一次性動畫
  })

  const works = [
    {
      title: 'Todo List',
      description: '使用 React 18 搭配 Tailwind CSS 實作待辦清單應用。',
      image: './images/todolist.png',
      link: 'https://isnina47.github.io/todo-list-nina/',
      type: '個人'
    },
    {
      title: 'About Nina',
      description: '使用 Vue + Tailwind 打造個人簡介網站。',
      image: './images/aboutNina.png',
      link: 'https://isnina47.github.io/About_Nina/',
      type: '個人'
    },
    {
      title: '屋裡',
      description: '應用JavaScript + jQuery 打造老屋介紹網站。',
      image: './images/ninaproject.png',
      link: 'https://isnina47.github.io/nina_project/',
      type: '個人'
    },
    {
      title: '幻浸實驗室',
      description: '使用Vue及JavaScript設計沉浸式體驗購票網站及客製化票券。',
      image: './images/illusionLab.png',
      link: 'https://tibamef2e.com/tid102/g2/',
      type: '團體'
    }
  ]

  const filteredWorks = computed(() => {
    if (activeCategory.value === '全部') return works
    return works.filter(w => w.type === activeCategory.value)
  })
</script>

<template>
  <section
    class="min-h-screen px-6 py-20 max-w-6xl mx-auto animate__animated animate__fadeIn animate__fast"
  >
    <h1
      class="text-2xl font-bold text-title text-center mb-10 animate__animated animate__fadeInDown animate__fast"
    >
      🎨 我的作品集
    </h1>

    <!-- 分類按鈕 -->
    <!-- flex-wrap自動換行 -->
    <div
      class="flex justify-center gap-4 mb-12 flex-wrap text-sm animate__animated animate__fadeInUp animate__fast"
    >
      <button
        v-for="cat in ['全部', '個人', '團體']"
        :key="cat"
        @click="activeCategory = cat"
        :class="[
          'px-4 py-2 rounded-full border font-medium transition',
          activeCategory === cat
            ? 'bg-btn text-btnText border-btn'
            : 'bg-white text-textColor border-gray-300 hover:bg-gray-100'
        ]"
      >
        {{ cat }}
      </button>
      <!-- 使用條件 class : 點選變色 -->
    </div>

    <!-- 作品卡片 -->
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(work, index) in filteredWorks"
        :key="work.title + index"
        class="bg-white border rounded-xl overflow-hidden shadow transition-transform duration-300 hover:scale-105 relative flex flex-col h-full"
        :class="[showAnimation ? 'animate__animated animate__fadeInUp animate__fast' : '']"
      >
        <!-- 圖片區塊 固定高度並填滿比例 -->
        <img :src="work.image" :alt="work.title" class="w-full h-48 object-cover" />

        <!-- 內容區塊 -->
        <div class="p-6 flex flex-col flex-grow text-textColor">
          <h2 class="text-xl font-semibold mb-2 text-title">{{ work.title }}</h2>
          <p class="text-md leading-relaxed flex-grow">
            {{ work.description }}
          </p>
          <a
            :href="work.link"
            target="_blank"
            class="mt-4 px-4 py-2 bg-btn text-btnText border border-btnborder rounded hover:bg-btnHover transition w-fit"
          >
            查看作品
          </a>
        </div>
      </div>
      <!-- target="_blank" 點擊開分頁 -->
    </div>

    <!-- 🏠 返回首頁 -->
    <div class="text-center animate__animated animate__fadeInUp animate__fast">
      <router-link
        to="/"
        class="inline-block mt-20 px-6 py-2 bg-btn text-btnText border border-btnborder rounded hover:bg-btnHover transition"
      >
        返回首頁
      </router-link>
    </div>
  </section>
</template>
