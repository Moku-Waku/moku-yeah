<template>
    <!-- 背景图 -->
    <div class="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat blur-[2px]"
         :style="{ backgroundImage: `url(${baseUrl}img/Touhou-.webp)` }">
    </div>

    <!-- 主体部分（滚动的容器） -->
    <div class="bg-[#dbe8f644] w-[80vw] h-[calc(100vh-11rem)] mx-auto mt-4 rounded-md overflow-y-auto p-4 scrollbar-none">

        <!--  核心改动：网格布局，自适应一行放几个  -->
        <!-- 手机2列，平板3列，中等屏幕4列，大屏幕5列，gap-4控制卡片间距 -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center">

            <!-- 👇 核心改动：使用 v-for 循环渲染，删除了原本 5 个写死的卡片 👇 -->
            <div 
                v-for="song in songs" 
                :key="song.id" 
                class="song-card text-center w-full bg-white/30 rounded-lg p-2 flex flex-col cursor-pointer group"
            >
                <!-- 注意：src 前面加了冒号，绑定 song.cover 变量 -->
                <img :src="song.cover" class="w-full aspect-square object-cover rounded-md shadow-md" alt="专辑图片">
                
                <!-- 删除了重复的 id，直接用双大括号渲染数据 -->
                <p class="font-japen-bit text-[10px] w-full truncate mt-2 group-hover:text-blue-500">
                    {{ song.singer }}
                </p>
                
                <p class="font-japen-bit text-[15px] w-full line-clamp-2 text-[#373838] group-hover:text-blue-400">
                    {{ song.name }}
                </p>
            </div>
            <!-- 👆 循环结束 👆 -->


        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
// 基础路径：本地是 '/moku-yeah/'，部署后也是 '/moku-yeah/'
const baseUrl = import.meta.env.BASE_URL


// 👇 提取数据，定义响应式数组 👇
const songs = ref([
    {
        id: 1,
        name: 'Fiesta de la Luna ～魔法少女達の百年祭',
        singer: 'ジャージと愉快な仲間たち',
        // 注意：路径以 / 开头，请确保图片存放在 public/Album_Cover/ 下
        cover: `${baseUrl}Album_Cover/63_64_Completion.jpg` ,
        audio: `${baseUrl}audio/ジャージと愉快な仲間たち - Fiesta de la Luna ～魔法少女達の百年祭.mp3`
    },
    {
        id: 2,
        name: 'イタズラものたちの行進',
        singer: 'ジャージと愉快な仲間たち',
        cover: `${baseUrl}Album_Cover/Tierra- Piedra-Cielo-y-Hombre土と石と空と人.jpg`
    },
    {
        id: 3,
        name: 'Fiesta de la Luna ～魔法少女達の百年祭',
        singer: 'ジャージと愉快な仲間たち',
        cover: `${baseUrl}Album_Cover/63_64_Completion.jpg`
    },
    {
        id: 4,
        name: 'Fiesta de la Luna ～魔法少女達の百年祭',
        singer: 'ジャージと愉快な仲間たち',
        cover: `${baseUrl}Album_Cover/63_64_Completion.jpg`
    },
    {
        id: 5,
        name: 'Fiesta de la Luna ～魔法少女達の百年祭',
        singer: 'ジャージと愉快な仲間たち',
        cover: `${baseUrl}Album_Cover/63_64_Completion.jpg`
    },
    {
        id: 6,
        name: 'Fiesta de la Luna ～魔法少女達の百年祭',
        singer: 'ジャージと愉快な仲間たち',
        cover: `${baseUrl}Album_Cover/63_64_Completion.jpg`
    },
        {
        id: 7,
        name: 'Fiesta de la Luna ～魔法少女達の百年祭',
        singer: 'ジャージと愉快な仲間たち',
        cover: `${baseUrl}Album_Cover/63_64_Completion.jpg`
    },
        {
        id: 8,
        name: 'Fiesta de la Luna ～魔法少女達の百年祭',
        singer: 'ジャージと愉快な仲間たち',
        cover: `${baseUrl}Album_Cover/63_64_Completion.jpg`
    },
        {
        id: 9,
        name: 'Fiesta de la Luna ～魔法少女達の百年祭',
        singer: 'ジャージと愉快な仲間たち',
        cover: `${baseUrl}Album_Cover/63_64_Completion.jpg`
    },
        {
        id: 10,
        name: 'Fiesta de la Luna ～魔法少女達の百年祭',
        singer: 'ジャージと愉快な仲間たち',
        cover: `${baseUrl}Album_Cover/63_64_Completion.jpg`
    },
])

</script>
