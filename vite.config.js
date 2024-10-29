import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '192.168.0.197', // Укажите IP-адрес вашего MacBook
    port: 3000,            // Укажите порт, который хотите использовать
  }
})
