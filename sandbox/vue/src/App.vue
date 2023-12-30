<script setup>
import hljs from 'highlight.js'
import markdownit from 'markdown-it'
import { full as emoji } from 'markdown-it-emoji'
import mark from 'markdown-it-mark'
import { h, onMounted, ref, computed } from 'vue' // https://highlightjs.org
import twemoji from 'twemoji'

import { generateMarkdown } from '../../../src/index.js'
import Markdown from './Markdown.vue'

const markdown = ref()

onMounted(async () => {
  const md = markdownit({
    html: true,
    linkify: true,
    typographer: true,
    // highlight(str, lang) {
    //   console.log(lang)
    //   if (lang && hljs.getLanguage(lang)) {
    //     try {
    //       return `<pre><code class="hljs">${
    //            hljs.highlight(str, { language: lang, ignoreIllegals: true }).value
    //            }</code></pre>`
    //     } catch (__) {}
    //   }

    //   return `<pre><code class="hljs">${ md.utils.escapeHtml(str) }</code></pre>`
    // },
  })
    .use(emoji)

  const markdownHTML = md.render(await generateMarkdown(Markdown))
  markdown.value = h('div', { innerHTML: markdownHTML })
})
</script>

<template>
  <div class="container">
    <Markdown />
  </div>
</template>

<style>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>
