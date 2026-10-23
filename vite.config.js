import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(), // 恢复默认写法，让 Vite 正常工作
    tailwindcss(),
  ],
  base: '/moku-yeah/',
})
