import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    // Only use /KinderworldCA/ in production (GitHub Pages)
    // Use / for local development
    base: mode === 'production' ? '/KinderworldCA/' : '/',
  }
})