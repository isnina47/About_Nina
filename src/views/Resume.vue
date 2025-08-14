<script setup>
  import StickerPhoto from '../components/StickerPhoto.vue'
  import BackgroundDecor from '../components/BackgroundDecor.vue'
  import PillTitle from '../components/PillTitle.vue'
</script>

<template>
  <!-- 外層：不動 header/footer，只改中間卡片 -->
  <BackgroundDecor />
  <section>
    <div class="relative mx-auto max-w-5xl overflow-hidden">
      <!-- 卡片內容（保持相對定位，蓋在裝飾之上） -->
      <div class="relative p-6 md:p-10">
        <!-- 上方：照片 + 自我介紹 -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
          <div class="flex justify-center">
            <StickerPhoto src="/images/ninalife.jpg" :w="300" :h="360" />
          </div>

          <div>
            <h1 class="text-3xl font-bold text-title mb-3">余嘉婕 Nina</h1>
            <p class="text-text mb-6 leading-relaxed">
              我熱愛前端開發，擅長將設計轉化為良好的互動體驗，並持續學習新技術以提升效能與可維護性。
            </p>

            <h2 class="relative inline-block text-xl font-semibold text-title mt-6 mb-2">
              Contact
            </h2>
            <div class="space-y-1 text-text">
              <p>📧 ninaaaaa1327@gmail.com</p>
              <p>📱 0905-862-327</p>
            </div>
          </div>
        </div>

        <!-- 下方：左右兩欄 -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <!-- 工作經驗 -->
          <div>
            <PillTitle>工作經驗｜Experience</PillTitle>
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
            <div>
              <PillTitle>學歷｜Education</PillTitle>
              <div>
                <p class="font-semibold text-title">文藻外語大學｜法國語文系</p>
                <p class="text-sm text-textLight">2016.09 - 2020.06</p>
              </div>
            </div>

            <div>
              <PillTitle>技能｜Skills</PillTitle>
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
      </div>
    </div>
  </section>
</template>
