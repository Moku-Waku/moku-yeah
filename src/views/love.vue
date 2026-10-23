<template>
    <div class="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat blur-[2px]"
:style="{backgroundImage: `url(${baseUrl}/img/reisa_sunset.webp)`}"></div>

<!-- 主体部分（滚动的容器） -->
 <div class="bg-[#dbe8f644] w-[80vw] h-[calc(100vh-11rem)] mx-auto mt-4 rounded-md overflow-y-auto p-4 scrollbar-none">
    
 </div>
</template>
<script setup>
// 基础路径：本地是 '/moku-yeah/'，部署后也是 '/moku-yeah/'
const baseUrl = import.meta.env.BASE_URL
</script>