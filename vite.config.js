import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({ hot: !process.env.VITEST }),
  ],
  // base: '/search-movies-svelte/',
  base: '',
  test: {
    globals: true,
    environment: 'happy-dom'
  }
})
