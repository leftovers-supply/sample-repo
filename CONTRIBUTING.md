# Contributing

Pick one open issue labeled `leftovers-trial`. Check its `area: …` and `difficulty: …` labels, prerequisites, acceptance criteria, and any existing pull request before starting. Human and AI-assisted contributions are welcome under the same rules. Tasks range from localized documentation changes to complex features; each PR still addresses one issue.

An issue labeled `needs-prerequisite` is not ready to claim. Wait for its linked prerequisites to merge and for a maintainer to verify readiness and replace that label with `leftovers-trial`. This promotion is manual. Integrate with features already merged without expanding the assigned scope.

1. Create a branch from the current `main`. Use a short name such as `codex/resource-search`.
2. Implement that issue only. Keep the page in English and preserve keyboard access, narrow-screen layouts, and the `/sample-repo/` base path.
3. Keep dependencies minimal. Do not add credentials, analytics, real user data, or a backend. Do not change repository settings or deployment permissions as part of a feature issue.
4. Add focused regression coverage where behavior changes. For code changes, run `npm test` and `npm run build`; manually check any affected UI. For documentation-only changes, validate the instructions, links, and diff without unnecessary builds. For visible changes, include a screenshot if available.
5. Open a pull request referencing `Closes #<issue-number>`. Describe the behavior, verification results, and any limitations. Leave the merge decision to the maintainer.

Before merging, **Test and build** and **Diff hygiene** must pass on an up-to-date branch. To check your diff locally, fetch `origin/main` and run `git diff --check origin/main...HEAD` for committed changes and `git diff --check` for uncommitted changes. Fix failed checks on the same PR; do not disable or bypass them. Pages deployment is not a PR check and runs only after changes reach `main`.

The initial page intentionally has no search, filters, sort controls, saved items, theme toggle, or share buttons. These are separate exercises, not bugs to fix together. If an issue is already implemented or its requirements conflict with existing behavior, explain the mismatch before expanding scope.
