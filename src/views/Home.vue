<template>
  <section
    class="min-h-screen overflow-hidden font-serif px-8 py-12 animate__animated animate__fadeIn animate__fast"
  >
    <div class="max-w-6xl mx-auto">
      <!-- 頭像 + 自我介紹 + 聯絡方式（左右置中排列） -->
      <div
        class="mb-12 flex flex-col lg:flex-row items-center justify-center gap-10 animate__animated animate__fadeInDown animate__fast"
      >
        <!-- 頭像左側 -->
        <div class="flex-shrink-0">
          <img
            src="/images/nina.jpg"
            alt="Nina 頭像"
            class="w-40 h-40 rounded-full shadow-lg object-cover mb-4"
          />
        </div>

        <!-- 自我介紹 + 聯絡方式右側 -->
        <div class="flex-grow max-w-xl">
          <h1 class="text-2xl font-bold text-title mb-2">嗨，我是 Nina 余嘉婕 👋</h1>
          <p class="text-lg mt-4">
            我喜愛前端開發，喜歡學習新技術，樂於打造兼具美觀與實用的網站體驗。
          </p>
          <p class="mt-4 text-sm">新北市土城區｜3~4年工作經驗｜希望職稱：前端工程師</p>
        </div>
      </div>

      <!-- 學歷 & 技能 + 工作經驗 -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <!-- 左側：學歷 + 技能 -->
        <div
          class="space-y-6 animate__animated animate__fadeInLeft animate__fast animate__delay-1s"
        >
          <div>
            <h2 class="text-2xl font-bold text-title mb-2">聯絡方式</h2>
            <p>📧 ninaaaaa1327@gmail.com</p>
            <p>📱 0905-862-327</p>
          </div>
          <div>
            <h2 class="text-2xl font-bold text-title mb-2">學歷</h2>
            <p class="">文藻外語大學｜法國語文系</p>
            <p class="text-sm text-textLight">2016.09 - 2020.06</p>
          </div>
          <div>
            <h2 class="text-2xl font-bold text-title mb-2">技能</h2>
            <div class="space-y-6">
              <!-- 🔹 前端技術 -->
              <div>
                <h3 class="text-md mb-1 font-semibold text-title">前端技術</h3>
                <ul class="list-disc list-inside space-y-1">
                  <li>HTML5 / CSS3 / SASS / RWD</li>
                  <li>JavaScript (ES6+) / jQuery</li>
                  <li>Vue 3 / Vue Router</li>
                </ul>
              </div>
              <!-- 🔹 版本控制與協作工具 -->
              <div>
                <h3 class="text-md mb-2 font-semibold text-title">版本控制 / 設計工具</h3>
                <ul class="list-disc list-inside space-y-1">
                  <li>Git / GitHub</li>
                  <li>Figma</li>
                </ul>
              </div>
              <div>
                <h3 class="text-md font-semibold text-title">學習中</h3>
                <ul class="list-disc list-inside space-y-1">
                  <li>Tailwind CSS</li>
                  <li>Bootstrap</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- 右側：工作經驗 -->
        <div>
          <div class="animate__animated animate__fadeInRight animate__fast animate__delay-2s">
            <h2 class="text-2xl font-bold text-title mb-4">工作經驗</h2>
            <div class="space-y-6">
              <div class="border-l-4 border-border pl-4">
                <p class="font-semibold text-title">緯育 TibaMe｜前端工程師養成班</p>
                <p class="text-sm text-textLight">2024.06 - 2024.10</p>
                <p>
                  參與為期五個月的專業課程，系統性學習 HTML、CSS、JavaScript、Vue.js
                  等前端技術，並完成個人與團隊專案，累積實作經驗。
                </p>
              </div>
              <div class="border-l-4 border-border pl-4">
                <p class="font-semibold text-title">上景磁磚美學館｜業務助理</p>
                <p class="text-sm text-textLight">2023.09 - 2024.04</p>
                <p>
                  負責門市接待與產品介紹、Facebook
                  粉專經營，並協助業務處理行政與銷售支援等庶務事務。
                </p>
              </div>
              <div class="border-l-4 border-border pl-4">
                <p class="font-semibold text-title">水燦林國小｜專案管理員</p>
                <p class="text-sm text-textLight">2023.02 - 2023.07</p>
                <p>
                  協助外師管理與課程行政規劃，包含英語村活動、教學訪視與粉專經營，支援多所校內外英語教學專案。
                </p>
              </div>
              <div class="border-l-4 border-border pl-4">
                <p class="font-semibold text-title">愛美語國際語文教育｜兒童美語老師</p>
                <p class="text-sm text-textLight">2020.10 - 2022.10</p>
                <p>負責國小至高中學生美語教學、課業輔導與行政庶務。</p>
              </div>
            </div>
          </div>

          <!-- ✅ 快捷按鈕獨立動畫，延後進場 -->
          <div
            class="mt-10 flex gap-4 animate__animated animate__fadeInUp animate__fast animate__delay-3s"
          >
            <router-link
              to="/about"
              class="px-4 py-2 bg-btn border border-btnborder text-btnText rounded hover:bg-btnHover transition"
            >
              查看自傳
            </router-link>
            <router-link
              to="/portfolio"
              class="px-4 py-2 bg-btn border border-btnborder text-btnText rounded hover:bg-btnHover transition"
            >
              查看作品集
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
