<template>
  <NavBar />
  <!-- 只在履歷和作品及頁面渲染背景 -->
  <BackgroundGrid v-if="showGrid" />
  <main>
    <router-view />
  </main>

  <Footer />
</template>
<script setup>
  import { useRoute } from 'vue-router'
  import { computed } from 'vue'
  import NavBar from './components/NavBar.vue'
  import Footer from './components/Footer.vue'
  import BackgroundGrid from './components/BackgroundGrid.vue'

  const route = useRoute()
  const showGrid = computed(() => route.meta.grid === true)
</script>
