import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      remotes: {
        'remote': 'http://localhost:3001/assets/remote.js',
      },
      shared: ['react']
    }),
  ],
  preview: {
    host: 'localhost',
    port: 3000,
    strictPort: true,
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
