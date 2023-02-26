import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.join(process.cwd(), '.env') });

const rollupOptions = {};

if (process.env.ENV === 'dev' || process.env.ENV === 'development') {
  rollupOptions.output = {
    entryFileNames: 'assets/[name].js',
    chunkFileNames: 'assets/[name].js',
    assetFileNames: 'assets/[name][extname]',
  };
}

export default defineConfig({
  plugins: [react()],
  root: './src/views/',
  define: {
    'process.env': process.env,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/views/'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: process.env.REACT_PORT,
    proxy: {
      '/api': {
        target: `http://localhost:${process.env.EXPRESS_PORT}`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
    },
  },
  build: {
    outDir: '../../public',
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1600,
    emptyOutDir: false,
    rollupOptions,
  },
});
