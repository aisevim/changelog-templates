import commitLight from '../fixtures/commit-light.js'
import tagLight from '../fixtures/tags-light.js'
import { normalizeCommits, normalizeTags } from './normalize.js'
// import { useOctokit } from './octokit.js'

export function getCommitsGroupedByTag(tags, commits) {
  const groupedCommits = {}
  let tagKey = ''

  for (const commit of commits) {
    const tag = tags.find(tag => tag.sha === commit.sha)

    if (tag) {
      tagKey = tag.name
      groupedCommits[tagKey] = []
    } else if (tagKey) {
      groupedCommits[tagKey].push(commit)
    }
  }

  return groupedCommits
}

export async function getGitData() {
  // const { fetchData } = useOctokit({ owner: 'vueuse', repo: 'vueuse' })
  // const { commits, tags } = await fetchData()
  const commits = commitLight
  const tags = tagLight

  const normalizedTags = normalizeTags(tags)
  const normalizedCommits = normalizeCommits(commits)

  return {
    commitsGroupedByTag: getCommitsGroupedByTag(normalizedTags, normalizedCommits),
    commits: normalizedCommits,
    tags: normalizedTags,
  }
}
