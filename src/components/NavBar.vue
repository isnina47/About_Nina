<template>
  <header
    class="w-full sticky top-0 z-50 h-16 bg-header border-t border-b border-black px-6 flex justify-between items-center"
  >
    <router-link to="/" class="text-xl text-title">About Nina</router-link>

    <nav class="flex gap-6 text-title font-medium">
      <!-- HOME -->
      <!-- relative group：讓 <router-link> 成為定位父層，方便 Tooltip 定位 -->
      <router-link
        to="/"
        class="relative group hover:text-textHover font-semibold transition"
        exact-active-class="text-textHover"
      >
        HOME
        <span
          class="absolute left-1/2 -translate-x-1/2 top-full mt-1 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap"
        >
          首頁
        </span>
      </router-link>

      <!-- RESUME -->
      <router-link
        to="/resume"
        class="relative group hover:text-textHover font-semibold transition"
        active-class="text-textHover"
      >
        RESUME
        <span
          class="absolute left-1/2 -translate-x-1/2 top-full mt-1 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap"
        >
          履歷
        </span>
      </router-link>

      <!-- PROJECTS -->
      <router-link
        to="/portfolio"
        class="relative group hover:text-textHover font-semibold transition"
        active-class="text-textHover"
      >
        PROJECTS
        <span
          class="absolute left-1/2 -translate-x-1/2 top-full mt-1 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap"
        >
          作品集
        </span>
      </router-link>
    </nav>
  </header>
</template>
