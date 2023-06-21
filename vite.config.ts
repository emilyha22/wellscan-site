import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        calculator: resolve(__dirname, 'calculator.html'),
        'food-search': resolve(__dirname, 'food-search.html'),
      },
    },
  }
})
