import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/BMI-Calculator/', // Change this to match your GitHub repository name
  plugins: [react()],
  build: {
    outDir: 'dist', // This is the folder where the build files will be generated
  },
});
