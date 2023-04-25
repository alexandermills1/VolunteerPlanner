// /Users/alexandermills/Documents/personal_projects/VolunteerPlanner/VP-react/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/static/',
  build: {
    outDir: '../static/',
    emptyOutDir: true,
    sourcemap: true,
  },
  plugins: [react()],
})
