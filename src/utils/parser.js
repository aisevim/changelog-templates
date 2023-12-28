import parser from 'conventional-commits-parser'

export function getParsedCommits(commit) {
  return parser.sync(commit, {
    headerPattern: /^(\w*)(?:\(([\w$.\-* ]*)\))?!?: (.*)$/,
    breakingHeaderPattern: /^(\w*)(?:\((.*)\))?!: (.*)$/,
    noteKeywords: ['BREAKING-CHANGE', 'BREAKING CHANGE', 'BREAKING CHANGES'],
  })
}
