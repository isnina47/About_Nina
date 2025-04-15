<template>
  <header
    class="w-full px-6 py-4 flex justify-between items-center border-t border-b border-black fixed top-0 z-50 bg-header"
  >
    <!-- 🔗 點擊 Logo 回首頁，不變色 -->
    <router-link to="/" class="text-xl font-bold text-title cursor-pointer">Nina</router-link>

    <nav class="flex gap-6 text-title font-medium">
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
