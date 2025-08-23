import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // Tüm ağ arayüzlerinden erişime izin ver (0.0.0.0)
    port: 5173 // Varsayılan port
  }
})
