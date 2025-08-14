<template>
  <NavBar />
  <BackgroundDecor />
  <!-- 預留空間給固定高度的 NavBar -->
  <main class="pt-16">
    <router-view />
  </main>

  <Footer />
</template>
<script setup>
  import NavBar from './components/NavBar.vue'
  import Footer from './components/Footer.vue'
  import BackgroundDecor from './components/BackgroundDecor.vue'
</script>
