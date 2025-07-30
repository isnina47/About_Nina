<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'

  // ref() 用來建立基本型別的響應式變數
  const showScrollBtn = ref(false) // 控制按鈕是否顯示在畫面中
  const visible = ref(false) // 控制按鈕是否進行動畫呈現，搭配 fadein/fadeout 等

  // 滾動事件處理函式
  // 要取得捲動距離通常用 window.scrollY 或 document.documentElement.scrollTop，不需要 event 本身，可以不接參數
  const handleScroll = () => {
    if (window.scrollY > 200) {
      // 網頁捲動超過200px 顯示按鈕並觸發進場動畫
      visible.value = true // 啟動 出場動畫 (v-if = true)
      showScrollBtn.value = true // 套用進場動畫 class (slideinRight)
    } else {
      showScrollBtn.value = false // 套用出場動畫 (slideOutRight)
      // 讓動畫結束後再移除 DOM，避免動畫被中斷
      setTimeout(() => {
        visible.value = false // 移除按鈕區塊  v-if = false
      }, 200) // 對應 animate__faster 時間
    }
  }
  // 點擊按鈕返回頂部
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  // 元件掛載時綁定 scroll 事件，持續監聽使用者是否向下捲動
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
      <h1 class="text-2xl font-bold mb-4 border-b pb-2 text-title">關於我｜About Me</h1>
      <p class="mb-10 leading-relaxed text-md text-justify lg:text-left">
        您好，我是 Nina
        余嘉婕，畢業於文藻外語大學。個性細心，擅長規劃與協作，具備良好溝通能力與責任感，能快速適應並完成各項任務。
      </p>
    </div>

    <!-- 💼 轉職動機 -->
    <div class="animate__animated animate__fadeInUp animate__fast animate__delay-2s">
      <h1 class="text-2xl font-bold mb-4 border-b pb-2 text-title">
        轉職動機｜Career Transition Motivation
      </h1>
      <p class="mb-10 leading-relaxed text-md text-justify lg:text-left">
        在過去從事補教與行政工作的期間，曾因職務需要接觸到網站管理與內容維護的工作，讓我開始對「一個網站畫面是如何被實作出來」產生濃厚的興趣。這段經驗開啟了我對前端開發的探索，也讓我意識到自己渴望投身一個能累積技術專業、持續成長並產出具體成果的領域。相較於過往穩定但缺乏挑戰的工作，我決定轉職成為前端工程師，期望在這個創造力與技術並重的職涯中發揮所長。
      </p>
    </div>

    <!-- 🧠 技能與專案 -->
    <div class="animate__animated animate__fadeInUp animate__fast animate__delay-3s">
      <h1 class="text-2xl font-bold mb-4 border-b pb-2 text-title">
        技能與專案經驗｜Skills & Projects
      </h1>
      <p class="mb-4 leading-relaxed text-md text-justify lg:text-left">
        我在緯育 TibaMe
        前端養成班接受系統性訓練，著重於前端切版、畫面設計與互動開發，累積以下技術與實作能力：
      </p>
      <ul class="list-disc list-inside space-y-1 mb-10">
        <li>前端技術：HTML5、CSS3、JavaScript（ES6+）、Vue.js、Vue Router、Pinia</li>
        <li>版型與響應式設計：Bootstrap、RWD 網頁開發</li>
        <li>元件化與畫面開發：熟悉頁面切版與元件設計，能依設計稿還原高品質 UI 畫面</li>
        <li>開發工具：Git、GitHub、VS Code、Figma</li>
      </ul>
    </div>

    <!-- 🔭 未來展望 -->
    <div class="animate__animated animate__fadeInUp animate__fast animate__delay-4s">
      <h1 class="text-2xl font-bold mb-4 border-b pb-2 text-title">未來展望｜Future Goals</h1>
      <p class="leading-relaxed text-md text-justify lg:text-left">
        在學習與實作過程中，我深刻體會到「設計與技術的融合」是前端開發最具吸引力的部分，特別是打造流暢、直覺、具有視覺層次感的使用者體驗。
      </p>
      <p class="mb-4 leading-relaxed text-md text-justify lg:text-left">未來我期望：</p>
      <ul class="list-disc list-inside space-y-1">
        <li>精進 Vue.js / React 等現代框架的熟練度</li>
        <li>掌握效能優化與進階互動開發技巧</li>
        <li>擴展後端知識，朝向全端能力發展</li>
        <li>在團隊中善用溝通與協作優勢，與設計、後端工程師共同完成高品質產品</li>
      </ul>
      <p class="mt-4 leading-relaxed text-md text-justify lg:text-left">
        感謝您撥冗閱讀我的自傳，我非常期待能在前端開發領域貢獻我的熱忱與努力。
      </p>
    </div>

    <!-- 🏠 返回首頁 -->
    <div class="text-center animate__animated animate__fadeInUp animate__fast animate__delay-5s">
      <router-link
        to="/"
        class="inline-block mt-10 px-6 py-2 bg-btn text-btnText border border-btnborder rounded hover:bg-btnHover transition"
      >
        返回首頁
      </router-link>
    </div>

    <!--  回到頂部按鈕（滑入滑出） -->
    <!-- 只有 visible 為 true 時，才會渲染整個按鈕區塊，false 時這個div和按鈕會從 DOM 完全移除 -->
    <!-- v-if 用來控制 DOM 元素是否存在於頁面上 -->
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
