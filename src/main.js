import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

// 创建应用并挂载路由，整个项目只有一个入口
createApp(App).use(router).mount('#app')
