<template>
  <NavBar />

  <main class="pt-16">
    <router-view />
  </main>

  <Footer />
</template>
<script setup>
  import NavBar from './components/NavBar.vue'
  import Footer from './components/Footer.vue'
</script>
