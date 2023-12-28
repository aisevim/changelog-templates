import { getParsedCommits } from './utils/parser.js'

export function normalizeCommits(rawCommits) {
  const commits = rawCommits.map(content => ({
    raw: content,
    commitURL: content.html_url,
    message: content.commit.message,
    sha: content.sha,
    parse: getParsedCommits(content.commit.message),
    author: {
      name: content.author.login,
      avatar: content.author.avatar_url,
      link: content.author.html_url,
      type: content.author.type,
    },
    committer: {
      name: content.committer.login,
      avatar: content.committer.avatar_url,
      link: content.committer.html_url,
      type: content.committer.type,
    },
  }))

  return commits
}

export function normalizeTags(rawTags) {
  const tags = rawTags.map(content => ({
    raw: content,
    name: content.name,
    sha: content.commit.sha,
  }))

  return tags
}
