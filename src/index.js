import commitLight from '../fixtures/commit-light.js'
import tagLight from '../fixtures/tags-light.js'
import { getCommitsGroupedByTag } from './git.js'
import { normalizeCommits, normalizeTags } from './normalize.js'

// import { useOctokit } from './octokit.js'
try {
  // const { fetchData } = useOctokit({ owner: 'vueuse', repo: 'vueuse' })
  // const { commits, tags } = await fetchData()
  const commits = commitLight
  const tags = tagLight

  const normalizedTags = normalizeTags(tags)
  const normalizedCommits = normalizeCommits(commits)

  getCommitsGroupedByTag({ tags: normalizedTags, commits: normalizedCommits })
} catch (error) {
  console.log(error)
}
