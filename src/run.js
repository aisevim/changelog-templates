import { writeFileSync } from 'node:fs'

import { getGitData, generateMarkdown } from './index.js'

try {
  const gitData = await getGitData()
  const markdown = await generateMarkdown()

  writeFileSync('test.md', markdown)
} catch (error) {
  console.log(error)
}
