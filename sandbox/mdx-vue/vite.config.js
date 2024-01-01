import mdx from '@mdx-js/rollup'
import vue from '@vitejs/plugin-vue'
import rehypeHighlight from 'rehype-highlight'
import remarkEmoji from 'remark-emoji'
import remarkGfm from 'remark-gfm'
import { defineConfig } from 'vite'

const viteConfig = defineConfig({
  plugins: [
    vue(),
    {
      enforce: 'pre',
      ...mdx({
        jsxImportSource: 'vue',
        remarkPlugins: [remarkGfm, remarkEmoji],
        rehypePlugins: [rehypeHighlight],
      }),
    },
  ],
})

export default viteConfig
