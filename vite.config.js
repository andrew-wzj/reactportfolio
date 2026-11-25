import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from https://andrew-wzj.github.io/reactportfolio/
export default defineConfig({
  plugins: [react()],
  base: '/reactportfolio/',
})
