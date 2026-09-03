# Icon package for the Ninja Design System

Drop-in addition covering a gap the DS guide flags in its own caveats: the source Figma file
defined no icon family, so iconography has been ad hoc per screen. This packages the
**Finicon** set (finicon.app — open source, free for personal and commercial use) in the
design system's existing file conventions.

## Install

Copy into the design-system project root, preserving paths:

    components/icon/Icon.jsx
    components/icon/Icon.d.ts
    components/icon/Icon.prompt.md
    components/icon/icon.card.html   (see snippet below — write by hand)
    icons/icon-paths.js        <- glyph data, single source of truth
    icons/icon-registry.js     <- plain-HTML build of the same data
    icons/icons.css            <- .ico sizing classes for plain HTML

Then:

1. Add `Icon` to `_ds_manifest.json`: `{"name":"Icon","sourcePath":"components/icon/Icon.jsx"}`
2. Rebuild `_ds_bundle.js` so `window.NDPSDesignSystem_82df03.Icon` resolves.
3. Add `@import "icons/icons.css";` to `styles.css` (only needed for plain-HTML pages).
4. Add `components/icon/` to the guide's Index, and `Icon` to its Components list.

## Format contract

| | |
|---|---|
| Geometry | 24x24 viewBox, stroke `2`, round caps/joins |
| Color | `currentColor` only — set color on the parent |
| Sizes | `sm` 16 / `md` 20 (default) / `lg` 24 |
| Glyphs | 18: alert, approve, back, calendar, companies, dashboard, disbursement, export, menu, refresh, reject, report, requests, rupee, search, trendDown, trend, users (+ `people`, alias of `users`) |

Both entry points read `icons/icon-paths.js`, so adding a glyph is a one-file change: paste the
SVG body (no `<svg>` wrapper), swap `stroke="black"` for `stroke="currentColor"`, set
`stroke-width="2"`.

## Guide amendment

Add to Visual foundations, alongside Type and Color:

> **Iconography:** Finicon outline set — 24x24, stroke 2, single color via `currentColor`.
> Sizes 16 / 20 / 24 only. Icons never carry color on their own; they inherit from the control
> they sit in, so hover and active states move together. Status meaning stays with Tag and
> Alert — an icon alone never conveys state.

## Specimen card

`components/icon/icon.card.html` follows the same shape as `tag.card.html`: the `@dsCard`
comment on line 1, `../../styles.css`, the pinned React + Babel + `_ds_bundle.js` scripts, then
a `text/babel` block that renders the grid:

    <!-- @dsCard group="Components" viewport="700x300" name="Icon" subtitle="Finicon outline set · 18 glyphs · sm/md/lg" -->

    const { Icon } = window.NDPSDesignSystem_82df03;
    const NAMES = ["alert","approve","back","calendar","companies","dashboard",
                   "disbursement","export","menu","refresh","reject","report",
                   "requests","rupee","search","trendDown","trend","users"];
    // size row: <Icon name="approve" size="sm|md|lg" />
    // then NAMES.map(n => <div className="cell"><Icon name={n} /><span>{n}</span></div>)
