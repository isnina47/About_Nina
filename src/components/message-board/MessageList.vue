<template>
  <ul class="space-y-3">
    <li v-for="(msg, idx) in messages" :key="idx" class="p-4 border rounded">
      <p class="font-semibold">{{ msg.name }}：</p>
      <p class="text-gray-700">{{ msg.content }}</p>
      <p class="text-sm text-gray-400">{{ formatDate(msg.createdAt) }}</p>
    </li>
  </ul>
</template>

<script setup>
  const props = defineProps({
    messages: Array
  })

  const formatDate = iso => new Date(iso).toLocaleString()
</script>
