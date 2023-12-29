<script setup>
import markdownit from 'markdown-it'
import { full as emoji } from 'markdown-it-emoji'
import { onMounted, ref } from 'vue'

import { generateMarkdown } from '../../../src/index.js'
import Markdown from './Markdown.vue'

const markdown = ref()

onMounted(async () => {
  const md = markdownit({
    html: true,
  }).use(emoji)

  markdown.value = md.render(await generateMarkdown(Markdown))
})
</script>

<template>
  <div class="container">
    <div v-html="markdown" />
  </div>
</template>
