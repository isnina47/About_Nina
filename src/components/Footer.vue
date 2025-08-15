<template>
  <footer class="w-full bg-footer border-t border-b border-black py-4 text-center">
    <div class="max-w-6xl mx-auto px-6 flex flex-col items-center gap-3">
      <address class="not-italic flex flex-wrap items-center justify-center gap-3">
        <!-- Email pill -->
        <a
          :href="`mailto:${email}`"
          class="inline-flex items-center gap-2 px-3 py-1 text-title hover:-translate-y-0.5 transition"
          :title="email"
        >
          <svg
            class="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16v12H4zM22 6l-10 7L2 6"
            />
          </svg>
          <span class="text-sm">{{ email }}</span>
        </a>

        <!-- Phone pill -->
        <a
          :href="telHref"
          class="inline-flex items-center gap-2 px-3 py-1 text-title hover:-translate-y-0.5 transition"
          :title="telDisplay"
        >
          <svg
            class="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07
                     19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18
                     2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.31 1.77.57 2.61
                     a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.47-1.09
                     a2 2 0 0 1 2.11-.45c.84.26 1.71.45 2.61.57A2 2 0 0 1 22 16.92z"
            />
          </svg>
          <span class="text-sm">{{ telDisplay }}</span>
        </a>
      </address>

      <!-- 版權 -->
      <p class="text-title text-xs">© 2025 Nina 余嘉婕</p>
    </div>
  </footer>
</template>

<script setup>
  const email = 'ninaaaaa1327@gmail.com'
  const telDisplay = '0905-862-327'
  const telHref = `tel:${telDisplay.replace(/\D/g, '')}`
</script>
