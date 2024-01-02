import { writeFileSync } from 'node:fs'

import { generateMarkdown } from '../../../src/index.js'
import Markdown from './MarkdownCommon.mdx'

async function createPreview(component) {
  const markdown = await generateMarkdown(component)
  writeFileSync('PREVIEW.md', markdown)
}

createPreview(Markdown)
