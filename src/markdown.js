import { htmlToMarkdown } from './utils/turndown.js'
import { vueToHtmlString } from './utils/vue.js'

export async function generateMarkdown(component) {
  const html = await vueToHtmlString(component)

  return html
  // return htmlToMarkdown(html)
}
