import { fileURLToPath, URL } from 'node:url'
import { defineConfig, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig(<UserConfig>{
  plugins: [ vue() ],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'field-template', // Change this name to your desired name.
      formats: [ 'es' ]
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
