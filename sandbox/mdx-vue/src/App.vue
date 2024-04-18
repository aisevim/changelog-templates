<script setup>
import hljs from 'highlight.js'
import { onMounted } from 'vue'

import MarkdownCommon from './MarkdownCommon.mdx'

onMounted(() => {
  document.querySelectorAll('pre code').forEach(block => {
    hljs.highlightElement(block)
  })
})
</script>

<template>
  <div class="container">
    <MarkdownCommon />
  </div>
</template>

<style>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>
