import react from '@vitejs/plugin-react-swc'
import path from 'path';
import mkcert from 'vite-plugin-mkcert';
import svgr from 'vite-plugin-svgr';
import { BuildOptions, defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@core': path.resolve(__dirname, './src/core'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@styles': path.resolve(__dirname, './src/styles'),
    },
  },
  plugins: [
    react(),
    mkcert(),
    svgr()
  ],
})

// server: {
//   port: 5090,
//   https: true,
//   proxy: {
//     '/api': {
//       target: 'https://localhost:5443',
//       changeOrigin: true,
//       rewrite: path => path.replace(/^\/api/, '/api'),
//       secure: false
//     }
//   }
// }
