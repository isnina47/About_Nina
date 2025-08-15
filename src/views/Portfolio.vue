<script setup>
  import { ref, computed, onMounted } from 'vue'
  import PillTitle from '../components/PillTitle.vue'

  // ✅ 用 Vite 方式匯入資產，避免 GitHub Pages 子路徑失效
  const imgTodo = new URL('../assets/portfolio/todolist.png', import.meta.url).href
  const imgAbout = new URL('../assets/portfolio/aboutNina.png', import.meta.url).href
  const imgHouse = new URL('../assets/portfolio/ninaproject.png', import.meta.url).href
  const imgIllu = new URL('../assets/portfolio/illusionLab.png', import.meta.url).href

  const CATEGORIES = ['全部', '個人', '團體']
  const activeCategory = ref('全部')
  const showAnimation = ref(true) // 首次進場使用

  onMounted(() => {
    // 首次進場做一次淡入，2 秒後關閉（避免切分類時反覆動畫）
    setTimeout(() => {
      showAnimation.value = false
    }, 2000)
  })

  const works = [
    {
      title: 'About Nina',
      description:
        '個人簡介網站，含動畫效果、自我介紹、技能展示、工作經歷，並新增留言板功能串接 MockAPI。',
      image: imgAbout,
      link: 'https://isnina47.github.io/About_Nina/',
      type: '個人',
      tags: ['Vue 3', 'Tailwind CSS', 'MockAPI']
    },
    {
      title: 'Todo List',
      description:
        '待辦清單，支援新增、編輯、刪除、搜尋、進度條與動畫效果，並使用 localStorage 儲存資料。',
      image: imgTodo,
      link: 'https://isnina47.github.io/todo-list-nina/',
      type: '個人',
      tags: ['React', 'Tailwind CSS', 'Hooks']
    },
    {
      title: '屋裡',
      description: '依縣市與文創類別快速篩選，支援關鍵字搜尋，附老屋照片與簡介，RWD 響應式體驗。',
      image: imgHouse,
      link: 'https://isnina47.github.io/nina_project/',
      type: '個人',
      tags: ['JavaScript', 'jQuery', '老屋導覽']
    },
    {
      title: '幻浸實驗室',
      description:
        'Vue 3 + Vite 開發沉浸式活動購票網站，包含活動購票與客製化票券功能，我負責「星際邊境」頁面、票券客製化、購物車等互動模組。',
      image: imgIllu,
      link: 'https://tibamef2e.com/tid102/g2/',
      type: '團體',
      tags: ['Vue 3', '票券客製化', 'Composition API']
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
    <!-- 標題：與全站一致 -->
    <div class="text-center">
      <PillTitle>作品集｜Projects</PillTitle>
    </div>

    <!-- 分類按鈕：沿用站上按鈕語彙 -->
    <div class="flex justify-center gap-3 mb-10 flex-wrap text-sm">
      <button
        v-for="cat in CATEGORIES"
        :key="cat"
        @click="activeCategory = cat"
        :class="[
          'px-4 py-1 rounded-full border font-medium transition',
          activeCategory === cat
            ? 'bg-btn text-btnText border-btn'
            : 'bg-white text-textColor border-btnborder hover:bg-btnHover/10'
        ]"
      >
        {{ cat }}
      </button>
    </div>

    <!-- 作品卡片 -->
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="(work, index) in filteredWorks"
        :key="work.title + index"
        class="bg-white border border-btnborder rounded-xl overflow-hidden shadow-sm transition hover:-translate-y-0.5 hover:shadow-md flex flex-col h-full"
        :class="[showAnimation ? 'animate__animated animate__fadeInUp animate__fast' : '']"
      >
        <!-- 圖片 -->
        <div class="flex items-center justify-center bg-white h-48 p-4">
          <img :src="work.image" :alt="work.title" class="max-h-full max-w-full object-contain" />
        </div>

        <!-- 內容 -->
        <div class="p-6 flex flex-col flex-grow text-textColor">
          <h2 class="text-xl font-semibold mb-1 text-title">{{ work.title }}</h2>
          <p class="mb-3 leading-relaxed">{{ work.description }}</p>

          <!-- 標籤（與全站膠囊風格一致） -->
          <ul class="flex flex-wrap gap-2 mb-4">
            <li
              v-for="t in work.tags"
              :key="t"
              class="px-2 py-0.5 text-xs rounded-full bg-[#FFD3DD] text-title border border-btnborder"
            >
              {{ t }}
            </li>
          </ul>

          <a
            :href="work.link"
            target="_blank"
            rel="noopener"
            class="mt-auto inline-flex items-center justify-center px-3 py-1 rounded-lg text-btnText bg-btn border border-btnborder hover:bg-btnHover transition w-fit"
          >
            查看作品
            <svg class="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </article>
    </div>

    <!-- 快捷按鈕 -->
    <div class="mt-10 flex flex-wrap gap-5 justify-center">
      <!-- 回首頁 -->
      <router-link
        to="/"
        class="inline-flex items-center justify-center px-6 py-2 rounded-lg text-btnText bg-btn border border-btnborder hover:bg-btnHover transition"
      >
        <!-- 小箭頭 icon -->
        <svg class="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        首頁
      </router-link>

      <!-- 履歷 -->
      <router-link
        to="/resume"
        class="inline-flex items-center justify-center px-6 py-2 rounded-lg text-btnText bg-btn border border-btnborder hover:bg-btnHover transition"
      >
        履歷
        <svg class="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 20v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1"
          />
        </svg>
      </router-link>
    </div>
  </section>
</template>
