import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'assets': path.resolve(__dirname, './src/assets'),
      'components': path.resolve(__dirname, './src/components'),
      'localstorage': path.resolve(__dirname, './src/localstorage'),
      'models': path.resolve(__dirname, './src/models'),
      'routes': path.resolve(__dirname, './src/routes'),
      'services': path.resolve(__dirname, './src/services'),
      'utils': path.resolve(__dirname, './src/utils')      
    },
  },
  plugins: [react()],
})
