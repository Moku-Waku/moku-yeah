<template>
    <!-- 播放栏 -->
     <div class="bg-[#c4dae661] w-[90%] h-20 fixed bottom-0 inset-x-0 flex rounded-t-lg items-center  backdrop-blur-md mx-auto">
        <!-- 播放栏左侧音乐文件详情 -->
        <div class="flex items-center h-full ml-4 flex-shrink-0">
            <img  id="Album_Cover" :src="`${baseUrl}Album_Cover/63_64_Completion.jpg`" class="w-16 h-16 rounded-full shadow-md " alt="专辑图片">
        </div>
        <!-- 歌曲信息 -->
        <div class="max-w-[30%] min-w-0 flex flex-col justify-center text-white ml-4">
            <p class="text-[white] truncate font-japen-cute">Fiesta de la Luna ～魔法少女達の百年祭</p>
            <p class="text-sm text-[#787676dd] truncate">ジャージと愉快な仲間たち</p>
        </div>
        <!-- 小型歌词显示 -->
         <div class="flex-1 min-w-0 flex flex-col justify-center text-white text-[20px] text-center px-4">
            <p class="truncate text-center">纯音乐，请欣赏</p>
         </div>
        <!-- 播放按钮组件 -->
        <div class="flex items-center gap-4 ml-auto flex-shrink-0 mr-2">
            <img :src="`${baseUrl}/icon/caret-left-filled.png`" class="w-7 h-7 object-contain cursor-pointer hover:scale-110 transition" alt="上一首">
            <img  id="play_song" :src="`${baseUrl}/icon/play.png`" class="w-10 h-10 object-contain cursor-pointer hover:scale-110 transition" alt="播放">
            <img  id="pause_song" :src="`${baseUrl}/icon/pause.png`" class="w-10 h-10 object-contain cursor-pointer hover:scale-110 transition hidden" alt="暂停">
            <img :src="`${baseUrl}/icon/caret-right-filled.png`" class="w-7 h-7 object-contain cursor-pointer hover:scale-110 transition" alt="下一首">
        </div>
     </div>
    <!-- 隐藏的音频播放器，放在 <body> 结束标签前 -->
    <audio id="my-audio"></audio>
</template>

<script setup>
const baseUrl = import.meta.env.BASE_URL
// 这里暂时留空，等你以后写播放逻辑
</script>