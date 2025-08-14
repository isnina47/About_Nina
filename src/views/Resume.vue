<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'

  const showScrollBtn = ref(false)
  const visible = ref(false)

  const handleScroll = () => {
    if (window.scrollY > 200) {
      visible.value = true
      showScrollBtn.value = true
    } else {
      showScrollBtn.value = false
      setTimeout(() => {
        visible.value = false
      }, 200)
    }
  }
  // const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  onMounted(() => window.addEventListener('scroll', handleScroll))
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <section
    class="min-h-screen px-6 py-12 max-w-6xl mx-auto animate__animated animate__fadeIn animate__fast"
  >
    <!-- 上方：照片 + 自我介紹 -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16 items-center">
      <!-- 拍立得照片 -->
      <div class="flex justify-center lg:justify-start">
        <div class="bg-white p-3 shadow-lg border rounded-lg transform rotate-[-3deg]">
          <img src="/images/ninalife.jpg" alt="Nina 拍立得照片" class="w-64 h-80 object-cover" />
          <p class="mt-2 text-center text-sm text-textLight">Life is about learning 🌱</p>
        </div>
      </div>

      <!-- 簡單介紹與聯絡方式 -->
      <div>
        <h1 class="text-2xl font-bold text-title mb-3">余嘉婕 Nina</h1>
        <p class="text-text mb-6 leading-relaxed">
          我熱愛前端開發，擅長將設計轉化為良好的互動體驗，持續學習新技術以提升效能與可維護性。
        </p>
        <h2 class="text-xl font-semibold text-title mt-6 mb-2">Contact</h2>
        <div class="space-y-1 text-text">
          <p>📧 ninaaaaa1327@gmail.com</p>
          <p>📱 0905-862-327</p>
          <p>📍 新北市土城區</p>
        </div>
      </div>
    </div>

    <!-- 下方：工作經驗 + 學歷技能 -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <!-- 工作經驗 -->
      <div>
        <h2 class="text-2xl font-bold text-title mb-4 border-b pb-2">工作經驗｜Experience</h2>
        <div class="space-y-6">
          <div class="border-l-4 border-btnborder pl-4">
            <p class="font-semibold text-title">緯育 TibaMe｜前端工程師養成班</p>
            <p class="text-sm text-textLight">2024.06 - 2024.10</p>
            <p class="text-text">
              系統性學習 HTML、CSS、JavaScript、Vue.js 等前端技術，完成多個專案。
            </p>
          </div>
          <div class="border-l-4 border-btnborder pl-4">
            <p class="font-semibold text-title">上景磁磚美學館｜業務助理</p>
            <p class="text-sm text-textLight">2023.09 - 2024.04</p>
            <p class="text-text">門市接待、產品介紹、Facebook 粉專經營，協助業務與行政庶務。</p>
          </div>
          <div class="border-l-4 border-btnborder pl-4">
            <p class="font-semibold text-title">水燦林國小｜專案管理員</p>
            <p class="text-sm text-textLight">2023.02 - 2023.07</p>
            <p class="text-text">協助外師課程行政、活動企劃與粉專經營，跨校協作。</p>
          </div>
          <div class="border-l-4 border-btnborder pl-4">
            <p class="font-semibold text-title">愛美語國際語文教育｜兒童美語老師</p>
            <p class="text-sm text-textLight">2020.10 - 2022.10</p>
            <p class="text-text">教學、課程設計與行政支援。</p>
          </div>
        </div>
      </div>

      <!-- 學歷 + 技能 -->
      <div class="space-y-8">
        <!-- 學歷 -->
        <div>
          <h2 class="text-2xl font-bold text-title mb-4 border-b pb-2">學歷｜Education</h2>
          <div>
            <p class="font-semibold text-title">文藻外語大學｜法國語文系</p>
            <p class="text-sm text-textLight">2016.09 - 2020.06</p>
          </div>
        </div>

        <!-- 技能 -->
        <div>
          <h2 class="text-2xl font-bold text-title mb-4 border-b pb-2">技能｜Skills</h2>
          <div class="space-y-4">
            <div>
              <h3 class="font-semibold text-title mb-2">前端技術</h3>
              <ul class="list-disc list-inside text-text">
                <li>HTML5 / CSS3 / SASS / RWD</li>
                <li>JavaScript (ES6+)</li>
                <li>Vue 3 / Vue Router / Pinia</li>
              </ul>
            </div>
            <div>
              <h3 class="font-semibold text-title mb-2">版本控制 / 設計工具</h3>
              <ul class="list-disc list-inside text-text">
                <li>Git / GitHub</li>
                <li>Figma</li>
              </ul>
            </div>
            <div>
              <h3 class="font-semibold text-title mb-2">持續學習</h3>
              <ul class="list-disc list-inside text-text">
                <li>Tailwind CSS、React</li>
                <li>Bootstrap</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 回到頂部按鈕 -->
    <!-- <div
      v-if="visible"
      class="fixed bottom-6 right-6 animate__animated animate__faster"
      :class="showScrollBtn ? 'animate__slideInRight' : 'animate__slideOutRight'"
    >
      <button
        @click="scrollToTop"
        class="w-12 h-12 flex items-center justify-center rounded-full border border-btnborder text-btnText bg-btn hover:scale-90 transition duration-300"
        aria-label="回到頂部"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div> -->
  </section>
</template>
