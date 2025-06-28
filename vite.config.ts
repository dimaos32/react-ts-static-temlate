import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'

export default defineConfig({
  plugins: [react(), ssr()],
  build: {
    manifest: true,
    rollupOptions: {
      input: {
        index: '/src/pages/index.tsx',
        catalog: '/src/pages/catalog.tsx',
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
