<template>
  <!-- 只渲染在卡片內層，會被父層 overflow-hidden 裁切 -->
  <div class="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
    <!-- 左上：星芒（rose） -->
    <svg
      class="hidden md:block absolute -left-10 -top-6 w-[180px] lg:w-[220px] h-auto"
      viewBox="0 0 220 220"
      fill="#F3A0AD"
    >
      <polygon
        points="110,8 128,70 178,25 145,82 212,92 145,108 178,165 128,120 110,212 92,120 42,165 75,108 8,92 75,82 42,25 92,70"
      />
    </svg>

    <!-- 左下：花朵（periwinkle） -->
    <svg
      class="hidden lg:block absolute -left-16 bottom-6 w-[210px] xl:w-[250px] h-auto"
      viewBox="0 0 200 200"
      fill="#92A1C3"
    >
      <g transform="translate(100,100)">
        <circle r="36" />
        <circle cx="0" cy="-50" r="38" />
        <circle cx="47" cy="-15" r="38" />
        <circle cx="-47" cy="-15" r="38" />
        <circle cx="0" cy="50" r="38" />
      </g>
    </svg>

    <!-- 右上：膠囊（mist blue） -->
    <div
      class="hidden sm:block absolute -right-24 -top-10 w-[380px] lg:w-[480px] h-[130px] lg:h-[170px] rounded-full"
      style="background: #bed1e3; filter: blur(0.3px); opacity: 0.9"
    ></div>

    <!-- 右下：圓點群（mauve） -->
    <svg
      class="hidden md:block absolute right-6 bottom-6 w-[120px] lg:w-[150px] h-auto"
      viewBox="0 0 140 80"
      fill="#CCA1C9"
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
