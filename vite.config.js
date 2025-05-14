import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/For_Sonya/', // ← замени на имя твоего репо, если оно другое
});
