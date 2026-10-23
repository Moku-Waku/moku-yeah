import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlaylistView from '../views/PlaylistView.vue'
import love from '../views/love.vue'

// 路由表：把页面注册成 SPA 路由
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/playlist',
    name: 'playlist',
    component: PlaylistView,
  },
  {
    path: '/love',
    name: 'love',
    component: love,
  },
  // 兜底：未知路径回首页（毕业设计可留，也可改成 404 页面）
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  // 使用 HTML5 history 模式，URL 更干净（/playlist 而不是 /#/playlist）
  // 注意：部署到静态服务器时需配置「所有路径回退到 index.html」，
  // 否则刷新 /playlist 会 404。若不想配服务器，可改用 createWebHashHistory()。
  history: createWebHistory(),
  routes,
})

export default router
