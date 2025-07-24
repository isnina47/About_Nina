<template>
  <ul class="space-y-3">
    <li
      v-for="(msg, idx) in messages"
      :key="idx"
      class="border-l-4 pl-4 border-border p-4 bg-white/50 shadow-md rounded"
    >
      <p class="text-title font-semibold mb-1 underline underline-offset-4">{{ msg.name }}：</p>
      <p class="text-text">{{ msg.content }}</p>
      <p class="text-xs text-textLight mt-2">{{ formatDate(msg.createdAt) }}</p>
    </li>
  </ul>
</template>

<script setup>
  const props = defineProps({
    messages: Array
  })

  const formatDate = iso => new Date(iso).toLocaleString()
</script>
