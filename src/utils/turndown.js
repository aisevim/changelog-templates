import TurndownService from 'turndown'

export function htmlToMarkdown(html) {
  const turndownService = new TurndownService()
  return turndownService.turndown(html)
}
