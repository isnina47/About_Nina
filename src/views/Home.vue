<template>
  <section class="relative min-h-[78vh] overflow-hidden">
    <!-- 背景：柔和漸層 + 網格點（手機隱藏，提效能） -->
    <div class="absolute inset-0 -z-10" aria-hidden="true">
      <div
        class="absolute inset-0 bg-gradient-to-b from-[#FFEAF0] via-[#F7F0FF] to-[#FFFFFF]"
      ></div>

      <svg
        class="hidden md:block absolute -top-12 -left-12 w-[420px] h-[420px] opacity-40"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <pattern id="dotgrid" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="1.2" cy="1.2" r="1" fill="#BED1E3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotgrid)"></rect>
      </svg>

      <div
        class="hidden md:block absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-[#F3A0AD]/20 blur-3xl"
      ></div>
    </div>

    <div class="max-w-6xl mx-auto px-6 lg:px-8 py-14 lg:py-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <!-- 左：頭像 + 身分 -->
        <div class="flex flex-col items-center text-center">
          <div class="relative">
            <div class="absolute -inset-2 rounded-full bg-[#BED1E3]/40 blur-xl"></div>
            <img
              src="/images/nina.JPG"
              alt="Nina 頭像"
              width="192"
              height="192"
              fetchpriority="high"
              decoding="async"
              class="relative w-40 h-40 lg:w-48 lg:h-48 rounded-full object-cover shadow-lg"
            />
          </div>

          <div
            class="mt-5 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD3DD] border border-btnborder"
          >
            <span
              class="inline-block w-1.5 h-1.5 rounded-full bg-btnborder"
              aria-hidden="true"
            ></span>
            <span class="text-sm font-medium text-title">Frontend Developer / 前端工程師</span>
          </div>

          <h1 class="mt-4 text-3xl lg:text-4xl font-bold text-title tracking-tight leading-tight">
            Hi，我是
            <span class="text-title">Nina 余嘉婕</span>
          </h1>
          <p class="mt-2 text-textLight">新北市土城區｜3–4 年工作經驗</p>

          <p class="mt-5 max-w-prose text-text leading-relaxed">
            我喜愛前端開發，擅長把設計轉化為良好的互動體驗，並持續精進
            <span class="font-semibold">元件化、效能與可維護性。</span>
            目標：打造
            <span class="font-semibold text-title">美觀 × 可用 × 穩定</span>
            的網站！
          </p>

          <!-- 行動按鈕 -->
          <div class="mt-7 flex flex-wrap gap-3">
            <router-link
              to="/resume"
              aria-label="查看履歷"
              class="group inline-flex items-center justify-center px-6 py-2 rounded-lg text-btnText bg-btn border border-btnborder hover:bg-btnHover transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-btnborder focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              履歷
              <svg
                class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 2h8l5 5v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 2v6h6"
                />
              </svg>
            </router-link>

            <router-link
              to="/portfolio"
              aria-label="前往作品集"
              class="group inline-flex items-center justify-center px-6 py-2 rounded-lg bg-white text-btnborder border border-btnborder hover:bg-btnHover/20 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-btnborder focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              作品集
              <svg
                class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"
                />
              </svg>
            </router-link>
          </div>
        </div>

        <!-- 右：（ 轉職動機 + 職涯目標） -->
        <div
          class="relative rounded-2xl border border-[#222222] bg-white/70 shadow-md backdrop-blur-sm p-6 lg:p-8"
        >
          <div class="mb-3">
            <PillTitle>關於我｜About Me</PillTitle>
          </div>

          <!-- 轉職動機 -->
          <div class="mt-4">
            <div
              class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-btnHover/20 text-sm focus-within:ring-2 focus-within:ring-btnborder focus-within:ring-offset-2 focus-within:ring-offset-white"
            >
              <span
                class="inline-block w-2 h-2 rounded-full bg-btnborder"
                aria-hidden="true"
              ></span>
              轉職動機
            </div>
            <p class="mt-3 text-text leading-relaxed">
              曾任行政與業務助理，因參與公司網站改版而對前端開發產生興趣；之後投入系統化學習與專案實作，
              結合細心規劃與美感，致力於打造兼具
              <span class="font-semibold">功能性與使用者體驗</span>
              的網站。
            </p>
          </div>

          <!-- 職涯目標 -->
          <div class="mt-6">
            <div
              class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-btnHover/20 text-sm focus-within:ring-2 focus-within:ring-btnborder focus-within:ring-offset-2 focus-within:ring-offset-white"
            >
              <span
                class="inline-block w-2 h-2 rounded-full bg-btnborder"
                aria-hidden="true"
              ></span>
              職涯目標
            </div>
            <ul class="mt-3 space-y-3 text-text">
              <li class="flex items-start gap-3">
                <span
                  class="mt-1 inline-block w-2 h-2 rounded-full bg-btn"
                  aria-hidden="true"
                ></span>
                <p>
                  <span class="font-semibold">希望職稱：</span>
                  前端工程師（Vue / React）
                </p>
              </li>
              <li class="flex items-start gap-3">
                <span
                  class="mt-1 inline-block w-2 h-2 rounded-full bg-btn"
                  aria-hidden="true"
                ></span>
                <p>
                  <span class="font-semibold">技術成長：</span>
                  深化組件化與可維護架構，持續優化效能與可及性（a11y）
                </p>
              </li>
              <li class="flex items-start gap-3">
                <span
                  class="mt-1 inline-block w-2 h-2 rounded-full bg-btn"
                  aria-hidden="true"
                ></span>
                <p>
                  <span class="font-semibold">協作目標：</span>
                  與設計、後端密切合作，能獨立完成模組並主動提出改進
                </p>
              </li>
            </ul>
          </div>

          <!-- 技術亮點 -->
          <div class="mt-6">
            <div
              class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-btnHover/20 text-sm focus-within:ring-2 focus-within:ring-btnborder focus-within:ring-offset-2 focus-within:ring-offset-white"
            >
              <span
                class="inline-block w-2 h-2 rounded-full bg-btnborder"
                aria-hidden="true"
              ></span>
              技術亮點
            </div>
            <ul class="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-text">
              <li class="flex items-start gap-3">
                <span
                  class="mt-1 inline-block w-2 h-2 rounded-full bg-btn"
                  aria-hidden="true"
                ></span>
                <p>
                  <span class="font-semibold">Vue 3 / Composition API：</span>
                  元件化結構、維護性高
                </p>
              </li>
              <li class="flex items-start gap-3">
                <span
                  class="mt-1 inline-block w-2 h-2 rounded-full bg-btn"
                  aria-hidden="true"
                ></span>
                <p>
                  <span class="font-semibold">Tailwind CSS：</span>
                  設計系統化、快速完成 RWD
                </p>
              </li>
              <li class="flex items-start gap-3">
                <span
                  class="mt-1 inline-block w-2 h-2 rounded-full bg-btn"
                  aria-hidden="true"
                ></span>
                <p>
                  <span class="font-semibold">互動體驗：</span>
                  Animate.css 進場、細節過場
                </p>
              </li>
              <li class="flex items-start gap-3">
                <span
                  class="mt-1 inline-block w-2 h-2 rounded-full bg-btn"
                  aria-hidden="true"
                ></span>
                <p>
                  <span class="font-semibold">協作工具：</span>
                  Git / GitHub、Figma
                </p>
              </li>
            </ul>
          </div>

          <!-- 求職狀態膠囊 -->
          <div class="mt-6 flex flex-wrap gap-2">
            <span
              class="px-3 py-1 rounded-full bg-[#FFD3DD] border border-btnborder text-sm text-title"
            >
              求職中・前端工程師
            </span>
            <span
              class="px-3 py-1 rounded-full bg-white border border-btnborder text-sm text-title"
            >
              可遠端／台北新北
            </span>
            <span
              class="px-3 py-1 rounded-full bg-white border border-btnborder text-sm text-title"
            >
              可到職：兩週內
            </span>
          </div>
        </div>
      </div>

      <!-- 留言板 -->
      <div class="mt-14">
        <!-- SEO/語意更好） -->
        <h2 class="sr-only">留言板</h2>
        <MessageBoard />
      </div>
    </div>
  </section>
</template>

<script setup>
  import MessageBoard from '../components/message-board/MessageBoard.vue'
  import PillTitle from '../components/PillTitle.vue'
</script>
