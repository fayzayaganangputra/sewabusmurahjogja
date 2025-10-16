import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/sewabusmurahjogja/', // <- penting, nama repo kamu
  plugins: [react()],
});
