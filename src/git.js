export function getCommitsGroupedByTag({ tags, commits }) {
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
