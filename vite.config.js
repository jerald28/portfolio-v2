import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// base './' keeps asset paths relative, so the build works on Vercel,
// Netlify or GitHub Pages without extra configuration.
export default defineConfig({
  plugins: [vue()],
  base: './',
})
