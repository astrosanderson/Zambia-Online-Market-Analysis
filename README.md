# Zambia Online Retail — Opportunity Assessment

A 9-slide PowerPoint deck assessing the online retail (e-commerce) market opportunity in Zambia, benchmarked against UK retail trends. The deck is generated programmatically with [PptxGenJS](https://gitbrent.github.io/PptxGenJS/), so the slides are reproducible from code — edit the script, re-run it, and you get a fresh `.pptx`.

## The deck

`zambia_retail_v2.pptx` — 16:9, Poppins typeface, two-colour palette (navy + teal accent).

| # | Slide | Content |
|---|-------|---------|
| 1 | Title | "Opportunity Assessment — can it work, and what does the data say?" |
| 2 | Agenda | The six sections covered |
| 3 | What Is Online Retail? | Definition + four channels (web/app, social commerce, marketplace, mobile money) |
| 4 | Lessons from the UK | Headline stats + three transferable lessons |
| 5 | Zambia's Digital Landscape | KPI cards, connectivity bar chart, payment-barrier insight |
| 6 | The Market Opportunity | E-commerce revenue chart + market-size stats |
| 7 | Challenges to Navigate | Four challenges, each paired with a mitigation |
| 8 | Verdict | "Yes — it can work" + six recommendations |
| 9 | Close | Call to action |

## Project files

| File | Purpose |
|------|---------|
| `zambia_build_script.js` | Build script — recreates all 9 slides with PptxGenJS |
| `package.json` | Project metadata and the `pptxgenjs` dependency |
| `zambia_retail_v2.pptx` | The generated deck (build output, committed for convenience) |
| `Poppins-*.ttf` | Poppins font files (Light / Regular / SemiBold / Bold) |
| `.gitignore` | Ignores `node_modules`, editor/OS cruft, stray output |
| `README.md` | This file |

## How to regenerate the PPTX

**Requirements:** [Node.js](https://nodejs.org) ≥ 14 (developed against v24).

From this folder:

```bash
npm install      # installs pptxgenjs into node_modules
npm run build    # runs: node zambia_build_script.js
```

This writes `zambia_retail_v2.pptx` into the current directory. You can also run the script directly:

```bash
node zambia_build_script.js
```

### Editing the slides

All content, layout, and styling live in `zambia_build_script.js`. Each slide is a self-contained block. The palette and font are defined once at the top:

```js
const C = { dark: "1C2B36", teal: "2A7F6F", /* ... */ };
const FONT = "Poppins";
```

Change the data, re-run `npm run build`, and the deck regenerates.

## Fonts

The deck uses **Poppins**, an open-source typeface by the Indian Type Foundry, licensed under the [SIL Open Font License](https://openfontlicense.org/). It is available from [Google Fonts](https://fonts.google.com/specimen/Poppins).

PptxGenJS references the font *by name* (`fontFace: "Poppins"`); it does not embed it. For the deck to render with Poppins, the font must be installed on the machine that opens or presents the file. The four `.ttf` files are bundled here so you can install them if needed (on Windows: select all four → right-click → **Install**).

## Data sources

Zambia market figures (population, connectivity, mobile money, e-commerce size and growth, category mix):

- **ECDB** — Zambia E-Commerce Market Profile, 2025 — <https://ecommercedb.com>
- **DataReportal** — *Digital 2025: Zambia* (January 2025) — <https://datareportal.com/reports/digital-2025-zambia>
- **US International Trade Administration** — Zambia Country Commercial Guide — <https://www.trade.gov/country-commercial-guides/zambia>
- **Nikulipe** — Zambia Market Report, April 2025 — <https://nikulipe.com/countries/zambia>
- **AUDA-NEPAD** — *E-Commerce Systems in Zambia* report

UK benchmark figures (online share of retail sales, year-on-year growth, seasonality):

- **UK Office for National Statistics (ONS)** retail sales dataset (1996–2026), analysed in Power BI

> **Note:** Figures are drawn from the sources above as of early 2025–2026. Forward years on the revenue chart (`2026e`–`2029e`) are estimates/projections, not reported actuals. Verify against the latest source data before using the deck for decisions.

## License

The Poppins font is under the SIL Open Font License. The presentation content and build script are internal/unlicensed unless stated otherwise.
