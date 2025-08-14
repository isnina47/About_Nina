<template>
  <header
    class="w-full bg-footer border-t border-b border-black px-6 py-4 flex justify-between items-center fixed top-0 z-50"
  >
    <!--  點擊 Logo 回首頁，不變色 -->
    <router-link to="/" class="text-xl font-bold text-title cursor-pointer">Nina</router-link>

    <nav class="flex gap-6 text-title font-medium">
      <!-- 根據 $route.path 所在頁面加上樣式 -->
      <router-link
        to="/"
        class="hover:text-textHover font-bold transition"
        :class="{ 'text-textHover font-bold underline underline-offset-4': $route.path === '/' }"
      >
        首頁
      </router-link>
      <router-link
        to="/about"
        class="hover:text-textHover font-bold transition"
        :class="{
          'text-textHover font-bold underline underline-offset-4': $route.path === '/about'
        }"
      >
        自傳
      </router-link>
      <router-link
        to="/portfolio"
        class="hover:text-textHover font-bold transition"
        :class="{
          'text-textHover font-bold underline underline-offset-4': $route.path === '/portfolio'
        }"
      >
        作品集
      </router-link>
    </nav>
  </header>
</template>
