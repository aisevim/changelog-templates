<script setup>
import { Octokit } from '@octokit/rest'
import { marked } from 'marked'
import markedAlert from 'marked-alert'
import { markedEmoji } from 'marked-emoji'
import { onMounted, ref } from 'vue'

import { generateMarkdown } from '../../../src/index.js'
import Markdown from './Markdown.vue'

const markdownHTML = ref('')

onMounted(async () => {
  const octokit = new Octokit()
  const res = await octokit.rest.emojis.get()
  const emojis = res.data
  const options = {
    emojis,
    unicode: false,
  }

  const md = marked.use({
    gfm: true,

  })

  md.use(markedEmoji(options))
  md.use(markedAlert)

  markdownHTML.value = md.parse(await generateMarkdown(Markdown))
})
</script>

<template>
  <div class="container">
    <div v-html="markdownHTML" />
  </div>
</template>

<style>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>
