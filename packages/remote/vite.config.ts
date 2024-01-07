import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remote',
      filename: 'remote.js',
      exposes: {
        './Card': './src/components/Card.tsx',
      },
      shared: ['react']
    }),
  ],
  preview: {
    host: 'localhost',
    port: 3001,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
