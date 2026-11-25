import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from https://andrew-wzj.github.io/reactportfolio/
export default defineConfig({
  plugins: [react()],
  base: '/reactportfolio/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        housingLottery: resolve(import.meta.dirname, 'housing-lottery/index.html'),
      },
    },
  },
})
