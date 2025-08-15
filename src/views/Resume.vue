<script setup>
  import StickerPhoto from '../components/StickerPhoto.vue'
  import PillTitle from '../components/PillTitle.vue'
  import ContactPills from '../components/ContactPills.vue'

  // 技能  : 引用 devicon
  const skillsFrontend = [
    { name: 'HTML5', icon: 'html5-plain' },
    { name: 'CSS3', icon: 'css3-plain' },
    { name: 'JavaScript', icon: 'javascript-plain' },
    { name: 'Vue 3', icon: 'vuejs-plain' },
    { name: 'SASS', icon: 'sass-original' }
  ]

  const skillsTools = [
    { name: 'Git', icon: 'git-plain' },
    { name: 'GitHub', icon: 'github-original' },
    { name: 'Figma', icon: 'figma-plain' },
    { name: 'VS Code', icon: 'vscode-plain' }
  ]

  const skillsLearning = [
    { name: 'Tailwind CSS', icon: 'tailwindcss-original' },
    { name: 'React', icon: 'react-original' },
    { name: 'Bootstrap', icon: 'bootstrap-plain' }
  ]
</script>

<template>
  <section class="animate__animated animate__fadeIn animate__fast">
    <div class="relative mx-auto max-w-5xl overflow-hidden">
      <!-- 卡片內容（保持相對定位，蓋在裝飾之上） -->
      <div class="relative p-6 md:p-10">
        <!-- 上方：照片 + 自我介紹 -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
          <div class="flex justify-center">
            <StickerPhoto src="/images/ninalife.jpg" :w="300" :h="360" />
          </div>

          <!-- 右半邊 -->
          <div
            class="relative rounded-2xl border border-[#222222] bg-[#e2d3ff]/40 shadow-md backdrop-blur-sm p-6"
          >
            <h1 class="text-2xl font-bold text-title mb-3">朝前端工程師邁進！</h1>
            <p class="text-text mb-6 leading-relaxed">
              Hi！我是 Nina
              余嘉婕，畢業於文藻外語大學。個性細心，擅長規劃與團隊協作，具備良好溝通能力與責任感，能快速適應並完成各項任務。
            </p>

            <div class="text-text">
              <h2 class="font-bold text-title mb-2">聯絡方式｜CONTACT ME</h2>
              <ContactPills email="ninaaaaa1327@gmail.com" tel="0905862327" />
            </div>
          </div>
        </div>

        <!-- 下方：左右兩欄 -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- 工作經驗 -->
          <div>
            <PillTitle>工作經驗｜Experience</PillTitle>

            <div class="relative">
              <ul class="space-y-6">
                <!-- 1 -->
                <li class="relative pl-10">
                  <!-- 連接線（這筆以下要有連接線就加這個 span；最後一筆不要放） -->
                  <span class="absolute left-3 top-6 bottom-[-20px] w-px bg-btnborder"></span>

                  <!-- 節點 -->
                  <span
                    class="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-white ring-2 ring-[#92A1C3]"
                  >
                    <span class="h-2.5 w-2.5 rounded-full bg-[#F3A0AD]"></span>
                  </span>

                  <!-- 卡片 -->
                  <div class="rounded-md p-4 shadow-sm transition hover:-translate-y-0.5">
                    <div class="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <p class="font-semibold text-title">緯育 TibaMe｜前端工程師養成班</p>
                      <span
                        class="ml-auto text-xs px-2 py-0.5 rounded-full bg-[#FFD3DD] text-title"
                      >
                        2024.06 - 2024.10
                      </span>
                    </div>
                    <p class="mt-2 text-text">
                      系統性學習 HTML、CSS、JavaScript、Vue.js 等前端技術，完成多個專案。
                    </p>
                  </div>
                </li>

                <!-- 2 -->
                <li class="relative pl-10">
                  <span class="absolute left-3 top-6 bottom-[-20px] w-px bg-btnborder"></span>
                  <span
                    class="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-white ring-2 ring-[#92A1C3]"
                  >
                    <span class="h-2.5 w-2.5 rounded-full bg-[#F3A0AD]"></span>
                  </span>
                  <div class="rounded-md p-4 shadow-sm transition hover:-translate-y-0.5">
                    <div class="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <p class="font-semibold text-title">上景磁磚美學館｜業務助理</p>
                      <span
                        class="ml-auto text-xs px-2 py-0.5 rounded-full bg-[#FFD3DD] text-title"
                      >
                        2023.09 - 2024.04
                      </span>
                    </div>
                    <p class="mt-2 text-text">
                      門市接待、產品介紹、Facebook 粉專經營，協助業務與行政庶務。
                    </p>
                  </div>
                </li>

                <!-- 3 -->
                <li class="relative pl-10">
                  <span class="absolute left-3 top-6 bottom-[-20px] w-px bg-btnborder"></span>
                  <span
                    class="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-white ring-2 ring-[#92A1C3]"
                  >
                    <span class="h-2.5 w-2.5 rounded-full bg-[#F3A0AD]"></span>
                  </span>
                  <div class="rounded-md p-4 shadow-sm transition hover:-translate-y-0.5">
                    <div class="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <p class="font-semibold text-title">水燦林國小｜專案管理員</p>
                      <span
                        class="ml-auto text-xs px-2 py-0.5 rounded-full bg-[#FFD3DD] text-title"
                      >
                        2023.02 - 2023.07
                      </span>
                    </div>
                    <p class="mt-2 text-text">協助外師課程行政、活動企劃與粉專經營，跨校協作。</p>
                  </div>
                </li>

                <li class="relative pl-10">
                  <span
                    class="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-white ring-2 ring-[#92A1C3]"
                  >
                    <span class="h-2.5 w-2.5 rounded-full bg-[#F3A0AD]"></span>
                  </span>
                  <div class="rounded-md p-4 shadow-sm transition hover:-translate-y-0.5">
                    <div class="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <p class="font-semibold text-title">愛美語國際語文教育｜美語老師</p>
                      <span
                        class="ml-auto text-xs px-2 py-0.5 rounded-full bg-[#FFD3DD] text-title"
                      >
                        2020.10 - 2022.10
                      </span>
                    </div>
                    <p class="mt-2 text-text">教學、課程設計與行政支援。</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <!-- 學歷 + 技能 -->
          <div class="space-y-8">
            <div>
              <PillTitle>學歷｜Education</PillTitle>
              <div>
                <p class="font-semibold text-title mb-1">文藻外語大學｜法國語文系</p>
                <span class="text-xs px-2 py-0.5 rounded-full bg-[#FFD3DD] text-title">
                  2016.09 - 2020.06
                </span>
              </div>
            </div>

            <div>
              <PillTitle>技能｜Skills</PillTitle>
              <div class="space-y-4">
                <div>
                  <h3 class="font-semibold text-title mb-2">前端技術</h3>
                  <ul class="grid grid-cols-4 sm:grid-cols-6 gap-4 mb-6">
                    <li v-for="s in skillsFrontend" :key="s.name" class="group">
                      <div
                        class="aspect-square rounded-xl bg-white/70 flex items-center justify-center shadow-sm ring-0 transition group-hover:-translate-y-0.5 group-hover:shadow-md"
                        :title="s.name"
                        aria-label="s.name"
                      >
                        <!-- 有 Devicon -->
                        <i v-if="s.icon" :class="['devicon-' + s.icon, 'colored', 'text-4xl']"></i>

                        <!-- 沒 Devicon → 文字方塊 fallback -->
                        <span v-else class="text-sm font-semibold text-title">
                          {{ s.label || s.name }}
                        </span>
                      </div>
                      <span class="sr-only">{{ s.name }}</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 class="font-semibold text-title mb-2">版本控制 / 設計工具</h3>
                  <ul class="grid grid-cols-4 sm:grid-cols-6 gap-4 mb-6">
                    <li v-for="s in skillsTools" :key="s.name" class="group">
                      <div
                        class="aspect-square rounded-xl bg-white/70 flex items-center justify-center shadow-sm transition group-hover:-translate-y-0.5 group-hover:shadow-md"
                        :title="s.name"
                      >
                        <i v-if="s.icon" :class="['devicon-' + s.icon, 'colored', 'text-4xl']"></i>
                        <span v-else class="text-sm font-semibold text-title">
                          {{ s.label || s.name }}
                        </span>
                      </div>
                      <span class="sr-only">{{ s.name }}</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 class="font-semibold text-title mb-2">持續學習</h3>
                  <ul class="grid grid-cols-4 sm:grid-cols-6 gap-4">
                    <li v-for="s in skillsLearning" :key="s.name" class="group">
                      <div
                        class="aspect-square rounded-xl bg-white/70 flex items-center justify-center shadow-sm transition group-hover:-translate-y-0.5 group-hover:shadow-md"
                        :title="s.name"
                      >
                        <i v-if="s.icon" :class="['devicon-' + s.icon, 'colored', 'text-4xl']"></i>
                        <span v-else class="text-sm font-semibold text-title">
                          {{ s.label || s.name }}
                        </span>
                      </div>
                      <span class="sr-only">{{ s.name }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 快捷按鈕 -->
      <div class="my-8 flex flex-wrap gap-5 justify-center">
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

        <!-- 作品集 -->
        <router-link
          to="/portfolio"
          class="inline-flex items-center justify-center px-6 py-2 rounded-lg text-btnText bg-btn border border-btnborder hover:bg-btnHover transition"
        >
          作品集
          <!-- 小方格 icon（可省略） -->
          <svg class="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
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
  </section>
</template>
