import { Octokit } from '@octokit/rest'

export function useOctokit({ owner, repo }) {
  const octokit = new Octokit({})

  async function getCommits() {
    let response
    let commits = []
    let page = 1

    do {
      response = await octokit.repos.listCommits({
        owner,
        repo,
        per_page: 100,
        page,
        // until: '2021-04-01T00:00:00Z',
      })

      commits = commits.concat(response.data)
      page++
    } while (response.data.length === 100)

    return commits
  }

  async function getTags() {
    let response
    let tags = []
    let page = 1

    do {
      response = await octokit.repos.listTags({
        owner,
        repo,
        per_page: 100,
        page,
      })

      tags = tags.concat(response.data)
      page++
    } while (response.data.length === 100)

    return tags
  }

  async function getReleases() {
    let response
    let releases = []
    let page = 1

    do {
      response = await octokit.repos.listReleases({
        owner,
        repo,
        per_page: 100,
        page,
      })

      releases = releases.concat(response.data)
      page++
    } while (response.data.length === 100)

    return releases
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
