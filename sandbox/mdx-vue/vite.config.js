import mdx from '@mdx-js/rollup'
import vue from '@vitejs/plugin-vue'
import rehypeHighlight from 'rehype-highlight'
import remarkEmoji from 'remark-emoji'
import remarkGfm from 'remark-gfm'
import { remarkAlert } from 'remark-github-blockquote-alert'
import remarkMentions from 'remark-mentions'
import { defineConfig } from 'vite'

const viteConfig = defineConfig({
  plugins: [
    vue(),
    {
      enforce: 'pre',
      ...mdx({
        jsxImportSource: 'vue',
        remarkPlugins: [
          remarkGfm,
          remarkEmoji,
          remarkMentions,
          remarkAlert,
        ],
        rehypePlugins: [rehypeHighlight],
      }),
    },
  ],
})

export default viteConfig
