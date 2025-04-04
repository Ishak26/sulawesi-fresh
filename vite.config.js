import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import React from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [
    laravel({
      input: ['./resources/css/app.css', './resources/js/app.jsx'],
      refresh: true,
    }),
    React(),
  ],
})
