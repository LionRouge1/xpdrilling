import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { htmlPrerender } from "vite-plugin-html-prerender"
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    htmlPrerender({
      staticDir: path.resolve(__dirname, 'dist'),
      routes: [
        '/',
        '/about-us',
        '/services',
        '/fleet',
        '/our-team',
        '/contact-us',
        '/hseq',
        '/sustainability',
        '/404',
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    target: 'es2022',
  },
})
