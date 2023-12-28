import { useOctokit } from './octokit.js'

try {
  const { fetchData } = useOctokit({ owner: 'vueuse', repo: 'vueuse' })
  const { commits, tags } = await fetchData()
  console.log(commits, tags)
} catch (error) {
  console.log(error)
}
