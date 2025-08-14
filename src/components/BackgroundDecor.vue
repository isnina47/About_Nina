<template>
  <!-- 全站固定背景：覆蓋整個視窗 -->
  <div class="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
    <!-- 底色 -->
    <div class="absolute inset-0" style="background: #ebddc5"></div>

    <!-- 左上：橘色星芒（md 以上顯示） -->
    <svg
      class="hidden md:block absolute top-8 -left-10 w-[200px] lg:w-[240px] h-auto"
      viewBox="0 0 220 220"
      fill="#E59D2C"
    >
      <polygon
        points="110,8 128,70 178,25 145,82 212,92 145,108 178,165 128,120 110,212 92,120 42,165 75,108 8,92 75,82 42,25 92,70"
      />
    </svg>

    <!-- 左下：深藍花朵（lg 以上顯示） -->
    <svg
      class="hidden lg:block absolute -left-16 bottom-6 w-[220px] xl:w-[260px] h-auto"
      viewBox="0 0 200 200"
      fill="#2E4365"
    >
      <g transform="translate(100,100)">
        <circle r="36" />
        <circle cx="0" cy="-50" r="38" />
        <circle cx="47" cy="-15" r="38" />
        <circle cx="-47" cy="-15" r="38" />
        <circle cx="0" cy="50" r="38" />
      </g>
    </svg>

    <!-- 右上：淡米黃膠囊（sm 以上顯示） -->
    <div
      class="hidden sm:block absolute -right-24 -top-10 w-[420px] lg:w-[520px] h-[140px] lg:h-[180px] rounded-full"
      style="background: #f3d58d; filter: blur(0.3px); opacity: 0.9"
    ></div>

    <!-- 右下：橘褐圓點群（md 以上顯示） -->
    <svg
      class="hidden md:block absolute right-6 bottom-8 w-[120px] lg:w-[150px] h-auto"
      viewBox="0 0 140 80"
      fill="#8A3B08"
    >
      <circle cx="10" cy="10" r="4" />
      <circle cx="40" cy="16" r="4" />
      <circle cx="70" cy="8" r="4" />
      <circle cx="100" cy="18" r="4" />
      <circle cx="130" cy="10" r="4" />
      <circle cx="24" cy="46" r="4" />
      <circle cx="56" cy="56" r="4" />
      <circle cx="90" cy="46" r="4" />
    </svg>
  </div>
</template>
