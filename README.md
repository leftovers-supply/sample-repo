# Supply Lab

A small Vue 3 website for practicing focused open-source contributions. Six handpicked web resources, a responsive layout, and a GitHub Pages deployment workflow.

Live site: <https://leftovers-supply.github.io/sample-repo/>.

## Development

Use Node.js 24 LTS and npm. If you use nvm, run `nvm use` first.

```sh
npm ci
npm run dev
```

Open the URL printed by Vite, normally `http://localhost:5173/sample-repo/`.

```sh
npm test        # Catalog integrity and server-rendered Vue page smoke tests
npm run build  # Production files in dist/
npm run preview
```

The preview serves the production build, normally at `http://localhost:4173/sample-repo/`. Node is used for development, tests, and the build; the deployed site is static and needs no server or credentials. The page uses Google Fonts with local font fallbacks.

## Project layout

- `src/App.vue` — page sections and collection
- `src/components/ResourceCard.vue` — resource card
- `src/data/resources.js` — sample catalog
- `src/style.css` — responsive styles
- `tests/site.test.js` — baseline tests using Node's test runner
- `.github/workflows/site.yml` — validation and Pages deployment

## Deploy to GitHub Pages

In this repository's **Settings → Pages**, set **Source** to **GitHub Actions**. Merge a pull request into `main`, or run the **Site** workflow manually on `main`. Tests and the production build must succeed before the deployment job runs. The workflow uses the `github-pages` environment and GitHub's built-in token; no personal access token is needed.

Every pull request and push to `main` runs validation with read-only repository permissions. Pull requests also run **Diff hygiene**, which rejects whitespace errors and conflict markers in added lines. Deployment runs only for a `main` push or manual run in `leftovers-supply/sample-repo`. A fork can run checks, but must deliberately update this repository guard and enable Pages to publish its own copy. Vite's `base` is `/sample-repo/`; change it if deploying under another repository name or at the root of a custom domain.

## Contributions

Read [CONTRIBUTING.md](CONTRIBUTING.md) and [AGENTS.md](AGENTS.md). The [issue backlog](https://github.com/leftovers-supply/sample-repo/issues) covers documentation, tests, accessibility and UX, resource discovery, personal library features, catalog authoring, and the static platform. These are planned contributions; the initial scaffold remains a simple resource collection.

`main` requires a pull request with **Test and build** and **Diff hygiene** passing against an up-to-date base. The policy applies to administrators too; force pushes and branch deletion are disabled. A second reviewer is not required, but contributors must leave the merge decision to the maintainer. These repository settings are separate from the workflow file and must be configured again for a new repository.

Use `area: …` labels to choose a domain and `difficulty: S`, `M`, `L`, or `XL` to choose the size of the task: a localized change, coordinated behavior, a substantial subsystem, or a complex bounded feature. Each issue defines its scope, acceptance criteria, verification, and prerequisites. The [full issue index](docs/backlog.md) maps backlog IDs to issues and their dependencies.

Only [issues labeled `leftovers-trial`](https://github.com/leftovers-supply/sample-repo/issues?q=is%3Aissue+is%3Aopen+label%3Aleftovers-trial) are ready for the contribution pool. `needs-prerequisite` means wait for the linked issues to merge. A maintainer checks readiness and replaces that label with `leftovers-trial`; promotion is manual. Do not implement prerequisite issues inside an unrelated PR.

Reference documentation: [Vue](https://vuejs.org/guide/quick-start.html), [Vite deployments](https://vite.dev/guide/static-deploy.html#github-pages), and [GitHub Pages workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
