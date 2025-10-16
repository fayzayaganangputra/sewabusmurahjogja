import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/sewabusmurahjogja/', // ✅ sesuai nama repo di GitHub
  plugins: [react()],
})
