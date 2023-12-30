import TurndownService from 'turndown/lib/turndown.umd'
import { gfm } from 'turndown-plugin-gfm'

export function htmlToMarkdown(html) {
  const turndownService = new TurndownService({
    codeBlockStyle: 'fenced',
    bulletListMarker: '-',
    hr: '---',
  })

  turndownService.keep('picture')
  turndownService.keep('details')
  turndownService.rules.forEach(updateRules)
  turndownService.use(gfm)

  return turndownService.turndown(html)
}

function updateRules(rule) {
  if (rule.filter === 'img') {
    rule.replacement = function (content, node) {
      return node.outerHTML
    }
  }
}
