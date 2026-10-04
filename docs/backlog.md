# Contribution backlog

This index maps all 100 planned issues and their stable backlog IDs. It does not describe implemented features. Live issue status and labels are authoritative; this is the initial publication snapshot from 2026-10-04.

At publication: 20 S, 47 M, 22 L, and 11 XL tasks. 42 tasks are ready; 58 require earlier work. Read [CONTRIBUTING.md](../CONTRIBUTING.md) before claiming an issue.

S is a localized change, M coordinates several behaviors, L is a substantial subsystem, and XL is a complex but bounded feature. These are relative scope classes, not time estimates.

Only issues labeled `leftovers-trial` are ready for the contribution pool. After prerequisite work is merged, a maintainer verifies readiness and replaces `needs-prerequisite` with `leftovers-trial`. Promotion is manual. If optional related features have already merged, integrate with them without implementing unrelated issues.

## Docs

| ID | Issue | Size | Prerequisites |
| --- | --- | --- | --- |
| DOC01 | [#7](https://github.com/leftovers-supply/sample-repo/issues/7) Explain how catalog data reaches the rendered page | M | None |
| DOC02 | [#8](https://github.com/leftovers-supply/sample-repo/issues/8) Document a safe catalog-entry update with a worked example | M | None |
| DOC03 | [#9](https://github.com/leftovers-supply/sample-repo/issues/9) Make local setup failures diagnosable | M | None |
| DOC04 | [#10](https://github.com/leftovers-supply/sample-repo/issues/10) Document the guarded GitHub Pages deployment path | M | None |
| DOC05 | [#11](https://github.com/leftovers-supply/sample-repo/issues/11) Show a focused contribution from issue selection to review | S | None |
| DOC06 | [#12](https://github.com/leftovers-supply/sample-repo/issues/12) Explain what the baseline tests prove and miss | S | None |
| DOC07 | [#13](https://github.com/leftovers-supply/sample-repo/issues/13) Map responsive styles and visual customization points | M | None |
| DOC08 | [#14](https://github.com/leftovers-supply/sample-repo/issues/14) Provide a manual accessibility review guide for the current page | M | None |
| DOC09 | [#15](https://github.com/leftovers-supply/sample-repo/issues/15) Give visitors a concise guide to the existing collection | S | None |
| DOC10 | [#16](https://github.com/leftovers-supply/sample-repo/issues/16) Define practical editorial guidance for resource proposals | S | None |

## Testing

| ID | Issue | Size | Prerequisites |
| --- | --- | --- | --- |
| QA01 | [#17](https://github.com/leftovers-supply/sample-repo/issues/17) Assert the rendered page structure through a parsed DOM | M | None |
| QA02 | [#18](https://github.com/leftovers-supply/sample-repo/issues/18) Exercise resource cards with deterministic boundary-content fixtures | M | [#17](https://github.com/leftovers-supply/sample-repo/issues/17) |
| QA03 | [#19](https://github.com/leftovers-supply/sample-repo/issues/19) Provide a repeatable real-browser smoke-test runner | M | None |
| QA04 | [#20](https://github.com/leftovers-supply/sample-repo/issues/20) Verify the built site under the GitHub Pages subdirectory | L | [#19](https://github.com/leftovers-supply/sample-repo/issues/19) |
| QA05 | [#21](https://github.com/leftovers-supply/sample-repo/issues/21) Guard the existing keyboard navigation path | M | [#19](https://github.com/leftovers-supply/sample-repo/issues/19) |
| QA06 | [#22](https://github.com/leftovers-supply/sample-repo/issues/22) Detect new automated accessibility violations in CI | L | [#19](https://github.com/leftovers-supply/sample-repo/issues/19) |
| QA07 | [#23](https://github.com/leftovers-supply/sample-repo/issues/23) Test responsive layout contracts across breakpoint boundaries | M | [#19](https://github.com/leftovers-supply/sample-repo/issues/19) |
| QA08 | [#24](https://github.com/leftovers-supply/sample-repo/issues/24) Create reviewable visual regression baselines for the scaffold | M | [#19](https://github.com/leftovers-supply/sample-repo/issues/19) |
| QA09 | [#25](https://github.com/leftovers-supply/sample-repo/issues/25) Run a bounded browser-engine compatibility matrix | M | [#19](https://github.com/leftovers-supply/sample-repo/issues/19), [#21](https://github.com/leftovers-supply/sample-repo/issues/21) |
| QA10 | [#26](https://github.com/leftovers-supply/sample-repo/issues/26) Verify resource-link activation without visiting external sites | S | [#19](https://github.com/leftovers-supply/sample-repo/issues/19) |
| QA11 | [#27](https://github.com/leftovers-supply/sample-repo/issues/27) Regression-test the Pages deployment guard and permissions | L | None |
| QA12 | [#28](https://github.com/leftovers-supply/sample-repo/issues/28) Catch JavaScript and Vue correctness mistakes before deployment | M | None |
| QA13 | [#29](https://github.com/leftovers-supply/sample-repo/issues/29) Demonstrate that baseline tests detect a bounded set of real regressions | L | [#17](https://github.com/leftovers-supply/sample-repo/issues/17), [#18](https://github.com/leftovers-supply/sample-repo/issues/18), [#20](https://github.com/leftovers-supply/sample-repo/issues/20), [#27](https://github.com/leftovers-supply/sample-repo/issues/27) |
| QA14 | [#30](https://github.com/leftovers-supply/sample-repo/issues/30) Reject empty, skipped, or incomplete CI test results | M | [#19](https://github.com/leftovers-supply/sample-repo/issues/19) |

## Ux

| ID | Issue | Size | Prerequisites |
| --- | --- | --- | --- |
| BASE05 | [#5](https://github.com/leftovers-supply/sample-repo/issues/5) Add a persistent light and dark theme switch | M | None |
| BASE06 | [#6](https://github.com/leftovers-supply/sample-repo/issues/6) Add a copy-link action to each resource card | M | None |
| UX01 | [#31](https://github.com/leftovers-supply/sample-repo/issues/31) Expose the collection as a named list of resources | S | None |
| UX02 | [#32](https://github.com/leftovers-supply/sample-repo/issues/32) Keep both main navigation destinations available on narrow screens | M | None |
| UX03 | [#33](https://github.com/leftovers-supply/sample-repo/issues/33) Move keyboard focus to activated in-page destinations | M | None |
| UX04 | [#34](https://github.com/leftovers-supply/sample-repo/issues/34) Make text links recognizable without relying on color changes | S | None |
| UX05 | [#35](https://github.com/leftovers-supply/sample-repo/issues/35) Make primary navigation and resource links comfortable touch targets | S | None |
| UX06 | [#36](https://github.com/leftovers-supply/sample-repo/issues/36) Keep the page usable in forced-colors display modes | M | None |
| UX07 | [#37](https://github.com/leftovers-supply/sample-repo/issues/37) Increase the baseline readability of catalog text | M | None |
| UX08 | [#38](https://github.com/leftovers-supply/sample-repo/issues/38) Keep the page usable under zoom and custom text spacing | M | None |
| UX09 | [#39](https://github.com/leftovers-supply/sample-repo/issues/39) Provide a clean printable version of the resource collection | M | None |
| UX10 | [#40](https://github.com/leftovers-supply/sample-repo/issues/40) Add an opt-in keyboard navigator for the collection | L | [#33](https://github.com/leftovers-supply/sample-repo/issues/33) |
| UX11 | [#41](https://github.com/leftovers-supply/sample-repo/issues/41) Offer adjustable reading presentation for the current session | L | [#37](https://github.com/leftovers-supply/sample-repo/issues/37) |
| UX12 | [#42](https://github.com/leftovers-supply/sample-repo/issues/42) Show where each resource link will take the visitor | S | None |
| UX13 | [#43](https://github.com/leftovers-supply/sample-repo/issues/43) Reduce decorative hero height on short viewports | S | None |
| UX14 | [#44](https://github.com/leftovers-supply/sample-repo/issues/44) Improve contrast of small supporting text | S | None |

## Discovery

| ID | Issue | Size | Prerequisites |
| --- | --- | --- | --- |
| BASE01 | [#1](https://github.com/leftovers-supply/sample-repo/issues/1) Add text search to the resource collection | M | None |
| BASE02 | [#2](https://github.com/leftovers-supply/sample-repo/issues/2) Add a category filter for the resource collection | M | None |
| BASE03 | [#3](https://github.com/leftovers-supply/sample-repo/issues/3) Add title sorting to the resource collection | S | None |
| DISC01 | [#45](https://github.com/leftovers-supply/sample-repo/issues/45) Explore the catalog with topic facets and useful availability counts | M | [#1](https://github.com/leftovers-supply/sample-repo/issues/1), [#2](https://github.com/leftovers-supply/sample-repo/issues/2) |
| DISC02 | [#46](https://github.com/leftovers-supply/sample-repo/issues/46) Read a resource's purpose and prerequisites without leaving the collection | L | None |
| DISC03 | [#47](https://github.com/leftovers-supply/sample-repo/issues/47) Find related resources with clear reasons for each suggestion | M | [#45](https://github.com/leftovers-supply/sample-repo/issues/45), [#46](https://github.com/leftovers-supply/sample-repo/issues/46) |
| DISC04 | [#48](https://github.com/leftovers-supply/sample-repo/issues/48) Scan the same collection in a compact list view | M | None |
| DISC05 | [#49](https://github.com/leftovers-supply/sample-repo/issues/49) Share and revisit the exact collection query through its URL | L | [#1](https://github.com/leftovers-supply/sample-repo/issues/1), [#2](https://github.com/leftovers-supply/sample-repo/issues/2), [#3](https://github.com/leftovers-supply/sample-repo/issues/3), [#45](https://github.com/leftovers-supply/sample-repo/issues/45), [#48](https://github.com/leftovers-supply/sample-repo/issues/48) |
| DISC06 | [#50](https://github.com/leftovers-supply/sample-repo/issues/50) Express complex resource searches with bounded boolean queries | XL | [#1](https://github.com/leftovers-supply/sample-repo/issues/1), [#2](https://github.com/leftovers-supply/sample-repo/issues/2), [#45](https://github.com/leftovers-supply/sample-repo/issues/45), [#49](https://github.com/leftovers-supply/sample-repo/issues/49) |
| DISC07 | [#51](https://github.com/leftovers-supply/sample-repo/issues/51) Compare two to four resources side by side | XL | [#45](https://github.com/leftovers-supply/sample-repo/issues/45), [#46](https://github.com/leftovers-supply/sample-repo/issues/46) |
| DISC08 | [#52](https://github.com/leftovers-supply/sample-repo/issues/52) Explore curated reading paths with clear next steps | L | [#46](https://github.com/leftovers-supply/sample-repo/issues/46) |
| DISC09 | [#53](https://github.com/leftovers-supply/sample-repo/issues/53) Browse the collection by source website | M | [#49](https://github.com/leftovers-supply/sample-repo/issues/49) |
| DISC10 | [#54](https://github.com/leftovers-supply/sample-repo/issues/54) Pick one resource at random from the current results | S | [#1](https://github.com/leftovers-supply/sample-repo/issues/1), [#2](https://github.com/leftovers-supply/sample-repo/issues/2) |
| DISC11 | [#55](https://github.com/leftovers-supply/sample-repo/issues/55) Jump to a resource through an alphabetical title index | S | [#1](https://github.com/leftovers-supply/sample-repo/issues/1), [#2](https://github.com/leftovers-supply/sample-repo/issues/2) |
| DISC12 | [#56](https://github.com/leftovers-supply/sample-repo/issues/56) Suggest matching resource names and topics while searching | M | [#1](https://github.com/leftovers-supply/sample-repo/issues/1), [#45](https://github.com/leftovers-supply/sample-repo/issues/45) |
| DISC13 | [#57](https://github.com/leftovers-supply/sample-repo/issues/57) Explain which active browse constraints hide possible results | M | [#1](https://github.com/leftovers-supply/sample-repo/issues/1), [#2](https://github.com/leftovers-supply/sample-repo/issues/2), [#45](https://github.com/leftovers-supply/sample-repo/issues/45) |
| DISC14 | [#58](https://github.com/leftovers-supply/sample-repo/issues/58) Explore resource and topic connections in an accessible catalog map | XL | [#45](https://github.com/leftovers-supply/sample-repo/issues/45), [#46](https://github.com/leftovers-supply/sample-repo/issues/46) |

## Library

| ID | Issue | Size | Prerequisites |
| --- | --- | --- | --- |
| BASE04 | [#4](https://github.com/leftovers-supply/sample-repo/issues/4) Let visitors save resources locally | M | None |
| LIB01 | [#59](https://github.com/leftovers-supply/sample-repo/issues/59) Organize saved resources into named personal collections | L | [#4](https://github.com/leftovers-supply/sample-repo/issues/4) |
| LIB02 | [#60](https://github.com/leftovers-supply/sample-repo/issues/60) Keep private plain-text notes with saved resources | M | [#4](https://github.com/leftovers-supply/sample-repo/issues/4) |
| LIB03 | [#61](https://github.com/leftovers-supply/sample-repo/issues/61) Track explicit reading progress for saved resources | M | [#4](https://github.com/leftovers-supply/sample-repo/issues/4) |
| LIB04 | [#62](https://github.com/leftovers-supply/sample-repo/issues/62) Label saved resources with personal tags | M | [#4](https://github.com/leftovers-supply/sample-repo/issues/4) |
| LIB05 | [#63](https://github.com/leftovers-supply/sample-repo/issues/63) Record a personal usefulness rating for a saved resource | S | [#4](https://github.com/leftovers-supply/sample-repo/issues/4) |
| LIB06 | [#64](https://github.com/leftovers-supply/sample-repo/issues/64) Maintain an ordered read-next queue | L | [#4](https://github.com/leftovers-supply/sample-repo/issues/4) |
| LIB08 | [#65](https://github.com/leftovers-supply/sample-repo/issues/65) Build and resume personal learning plans with ordered stages | XL | [#4](https://github.com/leftovers-supply/sample-repo/issues/4), [#59](https://github.com/leftovers-supply/sample-repo/issues/59) |
| LIB09 | [#66](https://github.com/leftovers-supply/sample-repo/issues/66) Download a readable Markdown summary of a personal collection | M | [#59](https://github.com/leftovers-supply/sample-repo/issues/59), [#60](https://github.com/leftovers-supply/sample-repo/issues/60), [#61](https://github.com/leftovers-supply/sample-repo/issues/61) |
| LIB10 | [#67](https://github.com/leftovers-supply/sample-repo/issues/67) Add personal effort estimates to saved resources | S | [#4](https://github.com/leftovers-supply/sample-repo/issues/4) |
| LIB07 | [#68](https://github.com/leftovers-supply/sample-repo/issues/68) Plan saved resources on a weekly reading calendar | L | [#4](https://github.com/leftovers-supply/sample-repo/issues/4), [#61](https://github.com/leftovers-supply/sample-repo/issues/61), [#67](https://github.com/leftovers-supply/sample-repo/issues/67) |
| LIB11 | [#69](https://github.com/leftovers-supply/sample-repo/issues/69) Schedule periodic revisits to saved resources | M | [#4](https://github.com/leftovers-supply/sample-repo/issues/4) |
| LIB12 | [#70](https://github.com/leftovers-supply/sample-repo/issues/70) Apply collection, label, and progress changes to selected saved resources | L | [#59](https://github.com/leftovers-supply/sample-repo/issues/59), [#61](https://github.com/leftovers-supply/sample-repo/issues/61), [#62](https://github.com/leftovers-supply/sample-repo/issues/62) |
| LIB13 | [#71](https://github.com/leftovers-supply/sample-repo/issues/71) Recover personal records when catalog resources disappear | XL | [#4](https://github.com/leftovers-supply/sample-repo/issues/4), [#59](https://github.com/leftovers-supply/sample-repo/issues/59), [#60](https://github.com/leftovers-supply/sample-repo/issues/60), [#61](https://github.com/leftovers-supply/sample-repo/issues/61), [#62](https://github.com/leftovers-supply/sample-repo/issues/62), [#63](https://github.com/leftovers-supply/sample-repo/issues/63), [#64](https://github.com/leftovers-supply/sample-repo/issues/64), [#68](https://github.com/leftovers-supply/sample-repo/issues/68), [#65](https://github.com/leftovers-supply/sample-repo/issues/65), [#67](https://github.com/leftovers-supply/sample-repo/issues/67), [#69](https://github.com/leftovers-supply/sample-repo/issues/69) |
| LIB14 | [#72](https://github.com/leftovers-supply/sample-repo/issues/72) Back up and safely restore the complete personal library | XL | [#4](https://github.com/leftovers-supply/sample-repo/issues/4), [#59](https://github.com/leftovers-supply/sample-repo/issues/59), [#60](https://github.com/leftovers-supply/sample-repo/issues/60), [#61](https://github.com/leftovers-supply/sample-repo/issues/61), [#62](https://github.com/leftovers-supply/sample-repo/issues/62), [#63](https://github.com/leftovers-supply/sample-repo/issues/63), [#64](https://github.com/leftovers-supply/sample-repo/issues/64), [#68](https://github.com/leftovers-supply/sample-repo/issues/68), [#65](https://github.com/leftovers-supply/sample-repo/issues/65), [#67](https://github.com/leftovers-supply/sample-repo/issues/67), [#69](https://github.com/leftovers-supply/sample-repo/issues/69), [#71](https://github.com/leftovers-supply/sample-repo/issues/71) |

## Authoring

| ID | Issue | Size | Prerequisites |
| --- | --- | --- | --- |
| EDIT01 | [#73](https://github.com/leftovers-supply/sample-repo/issues/73) Validate catalog source data before contributors publish it | M | None |
| EDIT02 | [#74](https://github.com/leftovers-supply/sample-repo/issues/74) Exchange and migrate versioned catalog files safely | L | [#73](https://github.com/leftovers-supply/sample-repo/issues/73) |
| EDIT03 | [#75](https://github.com/leftovers-supply/sample-repo/issues/75) Scaffold a valid resource record from the command line | S | [#73](https://github.com/leftovers-supply/sample-repo/issues/73) |
| EDIT04 | [#76](https://github.com/leftovers-supply/sample-repo/issues/76) Summarize catalog coverage for maintainers | S | [#73](https://github.com/leftovers-supply/sample-repo/issues/73) |
| EDIT05 | [#77](https://github.com/leftovers-supply/sample-repo/issues/77) Edit a source catalog in a browser draft workspace | XL | [#73](https://github.com/leftovers-supply/sample-repo/issues/73), [#74](https://github.com/leftovers-supply/sample-repo/issues/74) |
| EDIT06 | [#78](https://github.com/leftovers-supply/sample-repo/issues/78) Import CSV catalogs through a reviewable staging step | XL | [#77](https://github.com/leftovers-supply/sample-repo/issues/77) |
| EDIT07 | [#79](https://github.com/leftovers-supply/sample-repo/issues/79) Resolve concurrent catalog edits with a three-way merge | XL | [#77](https://github.com/leftovers-supply/sample-repo/issues/77) |
| EDIT08 | [#80](https://github.com/leftovers-supply/sample-repo/issues/80) Show semantic catalog changes for contribution review | M | [#74](https://github.com/leftovers-supply/sample-repo/issues/74) |
| EDIT09 | [#81](https://github.com/leftovers-supply/sample-repo/issues/81) Consolidate catalog categories without changing resource identities | M | [#77](https://github.com/leftovers-supply/sample-repo/issues/77) |
| EDIT10 | [#82](https://github.com/leftovers-supply/sample-repo/issues/82) Flag likely duplicate source resources for curator review | M | [#73](https://github.com/leftovers-supply/sample-repo/issues/73) |
| EDIT11 | [#83](https://github.com/leftovers-supply/sample-repo/issues/83) Record catalog review evidence separately from display content | M | [#73](https://github.com/leftovers-supply/sample-repo/issues/73) |
| EDIT12 | [#84](https://github.com/leftovers-supply/sample-repo/issues/84) Work through a source catalog review queue | L | [#77](https://github.com/leftovers-supply/sample-repo/issues/77), [#83](https://github.com/leftovers-supply/sample-repo/issues/83) |
| EDIT13 | [#85](https://github.com/leftovers-supply/sample-repo/issues/85) Check catalog destinations with an opt-in local audit | L | [#73](https://github.com/leftovers-supply/sample-repo/issues/73) |
| EDIT14 | [#86](https://github.com/leftovers-supply/sample-repo/issues/86) Undo and redo catalog draft changes as complete operations | L | [#77](https://github.com/leftovers-supply/sample-repo/issues/77) |

## Platform

| ID | Issue | Size | Prerequisites |
| --- | --- | --- | --- |
| PLATFORM01 | [#87](https://github.com/leftovers-supply/sample-repo/issues/87) Serve the site typography without third-party font requests | M | None |
| PLATFORM02 | [#88](https://github.com/leftovers-supply/sample-repo/issues/88) Make Supply Lab installable with an accurate app identity | M | None |
| PLATFORM03 | [#89](https://github.com/leftovers-supply/sample-repo/issues/89) Make the complete catalog shell available offline on request | XL | [#87](https://github.com/leftovers-supply/sample-repo/issues/87) |
| PLATFORM04 | [#90](https://github.com/leftovers-supply/sample-repo/issues/90) Apply offline app updates safely across open tabs | XL | [#89](https://github.com/leftovers-supply/sample-repo/issues/89) |
| PLATFORM05 | [#91](https://github.com/leftovers-supply/sample-repo/issues/91) Give visitors control over downloaded offline site data | L | [#89](https://github.com/leftovers-supply/sample-repo/issues/89) |
| PLATFORM06 | [#92](https://github.com/leftovers-supply/sample-repo/issues/92) Deliver the full resource catalog before JavaScript starts | L | None |
| PLATFORM07 | [#93](https://github.com/leftovers-supply/sample-repo/issues/93) Recover visibly when the application bundle cannot start | M | [#92](https://github.com/leftovers-supply/sample-repo/issues/92) |
| PLATFORM08 | [#94](https://github.com/leftovers-supply/sample-repo/issues/94) Ship a restrictive content policy that works on static Pages | L | [#87](https://github.com/leftovers-supply/sample-repo/issues/87) |
| PLATFORM09 | [#95](https://github.com/leftovers-supply/sample-repo/issues/95) Show which static release is currently running | S | None |
| PLATFORM10 | [#96](https://github.com/leftovers-supply/sample-repo/issues/96) Provide a useful base-aware page for missing URLs | S | None |
| PLATFORM11 | [#97](https://github.com/leftovers-supply/sample-repo/issues/97) Keep catalog rendering responsive as the collection grows | L | None |
| PLATFORM12 | [#98](https://github.com/leftovers-supply/sample-repo/issues/98) Expose actionable runtime diagnostics only when requested | M | [#95](https://github.com/leftovers-supply/sample-repo/issues/95) |
| PLATFORM13 | [#99](https://github.com/leftovers-supply/sample-repo/issues/99) Build a portable single-file copy of the public catalog | L | [#87](https://github.com/leftovers-supply/sample-repo/issues/87) |
| PLATFORM14 | [#100](https://github.com/leftovers-supply/sample-repo/issues/100) Contain a resource card failure without losing the catalog | M | None |
