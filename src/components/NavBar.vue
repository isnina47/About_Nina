<template>
  <header
    class="w-full sticky top-0 z-50 h-16 bg-header border-t border-b border-black px-6 flex justify-between items-center"
  >
    <router-link to="/" class="text-xl text-title">About Nina</router-link>

    <nav class="flex gap-6 text-title font-medium">
      <router-link
        to="/"
        class="hover:text-textHover font-semibold transition"
        exact-active-class="text-textHover "
      >
        HOME
      </router-link>
      <router-link
        to="/resume"
        class="hover:text-textHover font-semibold transition"
        active-class="text-textHover"
      >
        RESUME
      </router-link>
      <router-link
        to="/portfolio"
        class="hover:text-textHover font-semibold transition"
        active-class="text-textHover"
      >
        PROJECTS
      </router-link>
    </nav>
  </header>
</template>
