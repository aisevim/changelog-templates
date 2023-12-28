import { Octokit } from '@octokit/rest'

export function useOctokit({ owner, repo }) {
  const octokit = new Octokit({})
  const MAX_PER_PAGE = 100

  async function getCommits() {
    return octokit.paginate(octokit.repos.listCommits, {
      owner,
      repo,
      per_page: MAX_PER_PAGE,
    })
  }

  async function getTags() {
    return octokit.paginate(octokit.repos.listTags, {
      owner,
      repo,
      per_page: MAX_PER_PAGE,
    })
  }

  async function fetchData() {
    const [commits, tags] = await Promise.all([
      getCommits(),
      getTags(),
    ])

    return {
      commits,
      tags,
    }
  }

  return {
    getCommits,
    getTags,
    fetchData,
  }
}
