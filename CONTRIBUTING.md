# Contributing

Pick one open issue labeled `leftovers-trial`. Read its acceptance criteria and check for an existing pull request before starting. Human and AI-assisted contributions are welcome under the same rules.

1. Create a branch from the current `main`. Use a short name such as `codex/resource-search`.
2. Implement that issue only. Keep the page in English and preserve keyboard access, narrow-screen layouts, and the `/sample-repo/` base path.
3. Keep dependencies minimal. Do not add credentials, analytics, real user data, or a backend. Do not change repository settings or deployment permissions as part of a feature issue.
4. Add focused regression coverage where behavior changes. Run `npm test` and `npm run build`; manually check any affected UI. For visible changes, include a screenshot if available.
5. Open a pull request referencing `Closes #<issue-number>`. Describe the behavior, verification results, and any limitations. Leave the merge decision to the maintainer.

The initial page intentionally has no search, filters, sort controls, saved items, theme toggle, or share buttons. These are separate exercises, not bugs to fix together. If an issue is already implemented or its requirements conflict with existing behavior, explain the mismatch before expanding scope.
