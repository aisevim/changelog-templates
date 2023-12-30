import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue()],
  server: {
    watch: {
      usePolling: true,
    },
  },
})

if (import.meta.hot) {
  console.log('icis')
  import.meta.hot.accept('./src/App.vue', mod => {
    console.log('ici')
  })
}
