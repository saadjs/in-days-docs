# in-days-docs

Public documentation for the InDays app (iPhone, iPad, and Apple Watch) and the hosted MCP service.

Hosted on GitHub Pages from the `/docs` directory at
<https://saadjs.github.io/in-days-docs/>. The app links to the Privacy, Terms, and Support pages
directly, so keep those URLs stable.

## Pages

- **Features**: `docs/features.html` (app screenshots and feature overview)
- **Privacy Policy**: `docs/privacy.html`
- **Terms & Conditions**: `docs/terms.html`
- **Support & FAQ**: `docs/support.html` (grouped by topic, with anchor links)

- **MCP setup**: `docs/mcp.html` (ChatGPT, iOS, Claude, and other MCP clients)
- **MCP Privacy Policy**: `docs/mcp-privacy.html`
- **MCP Terms of Service**: `docs/mcp-terms.html`
- **MCP Support**: `docs/mcp-support.html`

This repo is the source of truth for public pages and setup instructions. The app and MCP
service have separate privacy, terms, and support pages because their sign-in, storage, and
deletion behavior differ. The [MCP server repo](https://github.com/saadjs/in-days-mcp) contains
the Worker, OAuth endpoints, tools, migrations, and plugin package; it serves no public pages.

Bump the "Last updated" date on Privacy or Terms whenever their content changes.

## Images

App screenshots live in `docs/images/`.

Captured on an iPhone 17 Pro simulator in dark mode at 1206×2622. `log-tab.png`,
`history.png`, `filters.png`, and `plan.png` were recaptured on Aug 22, 2026 against the current
build.

`widget-filters.png` and `notification.png` are unused. The newer `filters.png` supersedes
`widget-filters.png`.

## Development

```bash
npm install
npm run dev    # serve docs/ at http://localhost:8080
npm run lint   # eslint, stylelint, prettier --check
```
