import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  base: 'https://EdinsonSV.github.io/portafolio_web',
  // server: {
  //   host: '192.168.100.52',
  //   port: 5173,
  //   strictPort: true,
  //   hmr: {
  //       host: '192.168.100.52',
  //   },
  // },
})
