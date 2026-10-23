import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    // 不转换模板里的资源地址：原页面写的是相对路径（img/...、../icon/...），
    // 静态资源按原层级放在 public/ 下，由浏览器按文档地址解析，链接与源站一致。
    vue({ template: { transformAssetUrls: { tags: {} } } }),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        songlist: 'Playlist_page/songlist.html',
      },
    },
  },
})
