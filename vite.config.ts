import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/interactive-rating-component',
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "./src/assets/Scss/variables.scss";
      `,
      },
    },
  },
});
