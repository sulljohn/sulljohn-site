import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'src',
  plugins: [react()],
  server: {
    port: 3001
  },
  publicDir: 'public',
  build: {
    outDir: '../dist', // Output the build to the root-level dist directory
    rollupOptions: {
      input: 'src/index.html', // Specify the location of your index.html file
    }
  }
});
