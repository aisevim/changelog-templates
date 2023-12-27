import { Octokit } from '@octokit/rest'

export function useOctokit({ owner, repo }) {
  const octokit = new Octokit({})

  async function getCommits() {
    return octokit.paginate(octokit.repos.listCommits, {
      owner,
      repo,
      per_page: 100,
    })
  }

  async function getTags() {
    return octokit.paginate(octokit.repos.listTags, {
      owner,
      repo,
      per_page: 100,
    })
  }

  async function getReleases() {
    return octokit.paginate(octokit.repos.listReleases, {
      owner,
      repo,
      per_page: 100,
    })
  }

  async function fetchData() {
    const [commits, tags, releases] = await Promise.all([
      getCommits(),
      getTags(),
      getReleases(),
    ])

    return {
      commits,
      tags,
      releases,
    }
  }

  return {
    getCommits,
    getTags,
    getReleases,
    fetchData,
  }
}
