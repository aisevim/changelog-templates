import { writeFileSync } from 'node:fs'

import markdownit from 'markdown-it'

import { generateMarkdown } from '../../../src/index.js'
import Markdown from './Markdown.vue'

async function createPreview(component) {
  const md = markdownit({
    html: true,
    linkify: true,
  })
  const markdown = await generateMarkdown(component)
  writeFileSync('PREVIEW.md', md.render(markdown))
}

createPreview(Markdown)
