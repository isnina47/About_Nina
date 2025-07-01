<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'

  const showScrollBtn = ref(false) // 控制按鈕是否顯示在畫面中
  const visible = ref(false) // 控制按鈕是否進行動畫呈現，搭配 fadein/fadeout 等

  const handleScroll = () => {
    if (window.scrollY > 200) {
      // 網頁捲動超過200px 就顯示返回頂部按鈕
      visible.value = true // 啟動 出場動畫
      showScrollBtn.value = true
    } else {
      showScrollBtn.value = false
      // 讓動畫完整結束後再隱藏元件
      setTimeout(() => {
        visible.value = false
      }, 200) // 對應 animate__faster 時間
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  // 元件載入後綁定 scroll 事件，持續監聽使用者是否向下捲動
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })
  // 元件卸載時，解除事件綁定，避免記憶體洩漏或不必要的觸發
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
</script>

<template>
  <section
    class="min-h-screen px-6 py-20 max-w-5xl mx-auto animate__animated animate__fadeIn animate__fast"
  >
    <!-- 📸 個人照 -->
    <div
      class="w-fit mx-auto mb-10 text-center animate__animated animate__fadeInDown animate__fast"
    >
      <div class="p-4 rounded-xl shadow-lg border w-64 mx-auto">
        <img
          src="/images/ninalife.jpg"
          alt="生活照"
          class="rounded-md mb-2 object-cover w-64 h-64"
        />
        <p class="text-sm italic">Life is about learning 🌱</p>
      </div>
    </div>

    <!-- 👤 關於我 -->
    <div class="animate__animated animate__fadeInUp animate__fast animate__delay-1s">
      <h1 class="text-2xl font-bold mb-4 border-b pb-2 text-title">關於我</h1>
      <p class="mb-10 leading-relaxed text-md text-justify lg:text-left">
        您好，我是 Nina
        余嘉婕，畢業於文藻外語大學。個性細心，擅長規劃與協作，具備高度責任感與良好溝通能力，能快速適應並完成各項任務。
      </p>
    </div>

    <!-- 💼 轉職動機 -->
    <div class="animate__animated animate__fadeInUp animate__fast animate__delay-2s">
      <h1 class="text-2xl font-bold mb-4 border-b pb-2 text-title">轉職動機</h1>
      <p class="mb-10 leading-relaxed text-md text-justify lg:text-left">
        從事補教與行政工作期間，我發現自己對「創造與建構」更有熱情，希望能投入一個可以持續學習、累積專業知識並創造實際價值的領域。因此，我選擇轉職成為前端工程師，結合設計與技術，打造實用又美觀的網站體驗。
      </p>
    </div>

    <!-- 🧠 技能與專案 -->
    <div class="animate__animated animate__fadeInUp animate__fast animate__delay-3s">
      <h1 class="text-2xl font-bold mb-4 border-b pb-2 text-title">技能與專案經驗</h1>
      <p class="mb-10 leading-relaxed text-md text-justify lg:text-left">
        我在緯育 TibaMe 養成班中，系統性地學習 HTML、CSS、JavaScript 及 Vue.js
        等技術。並透過個人與團隊專案實作，建立前端開發與協作經驗，這段密集學習的過程雖然充滿挑戰，但當我看到自己撰寫的程式成功運作、設計的畫面完美呈現在網頁上時，那份成就感更加堅定了我的轉職決心。
      </p>
    </div>

    <!-- 🔭 未來展望 -->
    <div class="animate__animated animate__fadeInUp animate__fast animate__delay-4s">
      <h1 class="text-2xl font-bold mb-4 border-b pb-2 text-title">未來展望</h1>
      <p class="mb-10 leading-relaxed text-md text-justify lg:text-left">
        透過這段學習與實作，我發現自己特別喜歡前端開發中「讓設計與技術結合，打造出直覺且美觀的使用者體驗」的過程。
        我期望持續精進前端技能，挑戰更複雜的互動與效能優化開發，未來也會涉獵後端知識，提升全端能力，期待在團隊中發揮所長、創造價值。
      </p>
    </div>

    <!-- 🏠 返回首頁 -->
    <div class="text-center animate__animated animate__fadeInUp animate__fast animate__delay-5s">
      <router-link
        to="/"
        class="inline-block mt-6 px-6 py-2 bg-btn text-btnText border border-btnborder rounded hover:bg-btnHover transition"
      >
        返回首頁
      </router-link>
    </div>

    <!--  回到頂部按鈕（滑入滑出） -->
    <!-- 只有 visible 為 true 時，才會渲染整個按鈕區塊 -->
    <div
      v-if="visible"
      class="fixed bottom-6 right-6 animate__animated animate__faster"
      :class="showScrollBtn ? 'animate__slideInRight' : 'animate__slideOutRight'"
    >
      <!-- 根據 showScrollBtn 的狀態切換動畫 -->
      <button
        @click="scrollToTop"
        class="w-12 h-12 flex items-center justify-center rounded-full border border-btnborder text-btnText bg-btn hover:scale-90 transition duration-300"
        aria-label="回到頂部"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  </section>
</template>
