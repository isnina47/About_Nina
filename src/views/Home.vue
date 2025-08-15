<template>
  <section class="min-h-screen">
    <div class="max-w-6xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <!-- 左：頭像 + 基本資料 -->
        <div class="flex flex-col items-center text-center">
          <img
            src="/images/nina.JPG"
            alt="Nina 頭像"
            class="w-40 h-40 rounded-full object-cover shadow-lg mb-6"
          />
          <h1 class="text-3xl lg:text-4xl font-bold text-title">嗨，我是 Nina 余嘉婕</h1>
          <p class="mt-3 text-textLight">新北市土城區｜3–4 年工作經驗｜希望職稱：前端工程師</p>
        </div>

        <!-- 右：自我介紹內容 -->
        <div class="bg-white rounded-lg shadow-lg p-6 lg:p-8 border border-border">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-btnHover/20 text-sm">
            <span class="inline-block w-2 h-2 rounded-full bg-btnborder"></span>
            About Me
          </div>

          <p class="mt-4 leading-relaxed text-text">
            我熱愛前端開發，擅長將設計轉化為良好的互動體驗，並持續學習新技術以提升效能與可維護性。
            近年在個人與團隊專案中，實作 Vue 3、RWD、元件化、與 Git 版控協作。目標是打造
            <span class="font-semibold text-textHover">美觀 × 可用 × 穩定</span>
            的網站。
          </p>

          <!-- 技術亮點條 -->
          <ul class="mt-6 grid grid-cols-2 gap-3 text-sm">
            <li class="flex items-center gap-2">
              <span class="inline-block w-2 h-2 rounded-full bg-btn"></span>
              Vue 3 / Vue Router
            </li>
            <li class="flex items-center gap-2">
              <span class="inline-block w-2 h-2 rounded-full bg-btn"></span>
              HTML5 / CSS3 / SASS / RWD
            </li>
            <li class="flex items-center gap-2">
              <span class="inline-block w-2 h-2 rounded-full bg-btn"></span>
              JavaScript (ES6+)
            </li>
            <li class="flex items-center gap-2">
              <span class="inline-block w-2 h-2 rounded-full bg-btn"></span>
              Git / GitHub / Figma
            </li>
          </ul>

          <!-- 按鈕區 -->
          <div class="mt-8 flex flex-wrap gap-3">
            <router-link
              to="/resume"
              class="inline-block mt-10 px-6 py-2 bg-btn text-btnText border border-btnborder rounded hover:bg-btnHover transition"
            >
              Resume
            </router-link>

            <router-link
              to="/portfolio"
              class="inline-block mt-10 px-6 py-2 bg-white text-btnborder border border-btnborder rounded hover:bg-btnHover/20 transition"
            >
              Projects
            </router-link>
          </div>
        </div>
      </div>

      <!-- 留言板 -->
      <div class="mt-12">
        <MessageBoard />
      </div>
    </div>
  </section>
</template>

<script setup>
  import MessageBoard from '../components/message-board/MessageBoard.vue'
</script>
