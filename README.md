# InfoBIM website

Official multilingual website for [InfoBIM](https://infobim.org), an open-source foundation and implementation service for Engineering Information Management.

The website presents InfoBIM through a real, anonymized industrial construction case: schedules, documents, field evidence, and technical decisions are connected into a traceable operational context without requiring a BIM model or a platform replacement.

## Languages

- Brazilian Portuguese (`pt-BR`) — default
- English (`en`)
- Spanish (`es`)

Translations live in `docs/i18n/`. The selected language is stored in the browser, and first-time visitors receive Portuguese, English, or Spanish according to their browser language.

## Structure

```text
docs/
├── index.html
├── styles.css
├── app.js
├── CNAME
├── i18n/
│   ├── pt-BR.json
│   ├── en.json
│   └── es.json
└── images/
```

The site is intentionally static and dependency-free. GitHub Pages serves the `docs/` directory.

## Local preview

Run any static HTTP server from `docs/`. Fetch-based translations do not load correctly when the page is opened directly through `file://`.

```bash
cd docs
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Content principles

- Lead with operational value, not implementation jargon.
- Use real construction workflows and concrete information sources.
- Keep the industrial case anonymous.
- Present the implementation service as the primary offer.
- Keep open source visible as evidence of transparency, portability, and technical credibility.
- Never imply that automation replaces engineering judgment.

## Visual identity

The website follows the same visual system used by InfoBIM project and container views:

- deep navy background;
- cyan information accents;
- translucent dark surfaces;
- rounded operational cards;
- subtle grid and radial-light treatments;
- compact status, context, and traceability elements.

There is no light theme.

## Links

- [InfoBIM organization](https://github.com/InfoBIM-Community)
- [InfoBIM core](https://github.com/InfoBIM-Community/infobim-core)
- [Blog](https://blog.infobim.org)
- [Discord](https://discord.gg/j8zTsdBw)

## License

Website content and source follow the repository license. InfoBIM Core is distributed under the Apache License 2.0.
