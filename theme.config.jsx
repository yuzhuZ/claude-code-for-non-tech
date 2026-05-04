export default {
  logo: <span style={{ fontWeight: 700 }}>Claude Code Learnings</span>,
  project: {
    link: 'https://github.com/yuzhu-zhang_adevinta/claude-code-learnings',
  },
  docsRepositoryBase: 'https://github.com/yuzhu-zhang_adevinta/claude-code-learnings/blob/main',
  footer: {
    text: 'Claude Code Learnings by Yuzhu Zhang',
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="What I've learned about Claude Code — CLI, skills, hooks, Agent SDK, and the Claude API." />
      <meta name="og:title" content="Claude Code Learnings" />
      <meta name="og:description" content="What I've learned about Claude Code — CLI, skills, hooks, Agent SDK, and the Claude API." />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Claude Code Learnings'
    }
  }
}
