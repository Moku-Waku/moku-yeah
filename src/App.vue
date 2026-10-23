<template>
  <!-- 导航栏：放在 router-view 之外，切换路由不重新加载 -->
  <div class="w-full max-w-full h-16 rounded-b-lg opacity-75 bg-[#c4dae661] font-japen-cute flex items-center">
    <ul class="flex w-full gap-6 list-none justify-center text-3xl">
      <li>
        <router-link to="/" class="text-white hover:text-blue-300 transition">
          开始
        </router-link>
      </li>
      <li>
        <router-link to="/playlist" class="text-white hover:text-blue-300 transition">
          歌单
        </router-link>
      </li>
      <li>
        <a href="/love" class="text-white hover:text-blue-300 transition">我的喜欢</a>
      </li>
    </ul>
  </div>

  <!-- 路由出口：首页 / 歌单 的内容在这里切换 -->
  <router-view />

  <!-- 播放栏：放在 router-view 之外，常驻底部，切页面时音频不中断 -->
  <PlayerBar />
</template>

<script setup>
// 播放栏只在这里引入一次，跨路由保持挂载
import PlayerBar from './components/PlayerBar.vue'
</script>
