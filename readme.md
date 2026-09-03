# Ninja Design System

This design system is based on NDPS brand guidelines.

## Index

- `styles.css` — root stylesheet, import-only. Pulls in every token/font file below.
- `tokens/fonts.css` — `@font-face` (via Google Fonts) for Noto Serif, Noto Sans.
- `tokens/fig-tokens.css` — generated from the file's 3 Figma Variable collections (56 variables: Core, Semantic, Spacing & Radius), light + dark modes.
- `tokens/typography.css` — the 6-step type scale (heading-1/2/3, body-lg, body, caption)
- `tokens/spacing.css` — px aliases for the unitless space/radius variables, plus card shadow and focus-ring tokens.
- `components/button/`, `components/alert/`, `components/input/`, `components/tag/` — the 4 component families from the source Figma file (see below).
- `components/descriptions/` — read-only key/value summary card, added from finalized web admin pages (Company created / Company management) — see Intentional additions.
- `components/icon/`, `icons/` — the Finicon outline icon set (18 glyphs) plus its plain-HTML registry and `.ico` sizing classes — see Intentional additions.
- `guidelines/` — 12 foundation specimen cards (colors, type, spacing, radius, elevation, brand) shown in the Design System tab.
- `ui_kits/ndps-app/` — an interactive 3-screen mobile click-through (Dashboard → Withdraw → History) built from the components above.

## Components

- **Button** — `type` (primary / default / neutral / text) × `size` (small / medium / large) × `state` (default / hover / disabled) = 36 variants.
- **Alert** — `variant` (info / success / warning / error), a tinted callout card with an icon badge, title, and description.
- **Input** — `state` (default / focus / error / disabled), a labeled amount field.
- **Tag** — `variant` (primary / success / warning / error / neutral), a small status pill.
- **Table** — `columns` × `data` record table; column flags `amount` (display-font tabular figures), `action` (sticky right column for row buttons), `align`, and `render(row)` for custom cells. Extracted from the transaction-list pattern — see Intentional additions.
- **Descriptions** — read-only key/value summary card (optional title header + 2-column grid, `full` items span both columns). Used for review/confirmation screens.
- **InnovationCurve** — NTT DATA Innovation Curve brand graphic (wireframe / solid variants). Dark backgrounds only; Curve:Grid stroke ratio fixed at 2:1.
- **Icon** — Finicon outline glyph, `name` × `size` (sm 16 / md 20 / lg 24). 24×24 viewBox, stroke 2, single color via `currentColor`. 18 glyphs; icons never carry their own color and never convey state on their own.
- **QuickAmountInput** — withdrawal-amount entry card: large amount readout + row of quick-select preset chips, with an error state. Distinct from `Input`.

### Intentional additions

The source Figma file defines exactly the 4 families above (Button, Alert, Input, Tag). Intentional additions extend the inventory:

- **Descriptions**: extracted from two finalized web admin pages (desktop "Company created" summary and the "Add company" wizard's review step) that use this exact data-display pattern to show onboarded company details.
- **QuickAmountInput**: extracted from a finalized "Amount Input" spec covering default/focus/error states of a withdrawal-amount card with preset chips.
- **InnovationCurve**: the NTT DATA Innovation Curve brand graphic (wireframe / solid), added from the brand guidelines as a dark-background hero/banner/slide graphic. Curve:Grid stroke ratio fixed at 2:1.
- **Table**: extracted from the transaction-list pattern in the standalone reference doc — a bordered record table with an uppercase muted header, `amount` cells in the display font, and a sticky right-hand action column.

- **Icon**: the Finicon outline set (finicon.app, open source), packaged to close the source file's missing-icon-family gap — 24×24, stroke 2, `currentColor`, sizes 16/20/24 only.

## Content fundamentals

- **Voice:** direct, second-person, reassuring — "You're eligible to withdraw now," "Increase your withdrawal amount." Sentences are short, imperative or declarative, no filler.
- **Numbers over adjectives:** copy leans on exact rupee amounts and dates rather than vague language — "Remaining ₹700 · Minimum ₹1,000," "Verified on 12 Jan 2024," "You can apply between Day 1 and Day 25." This is a finance product; precision reads as trustworthy.
- **Casing:** sentence case for body copy and button labels ("Withdraw now," "View history")
- **No emoji.** Not used anywhere in the source, including in a fintech context where they'd read as untrustworthy.
- **Middle dot (·) as separator** in compact stat lines — "Remaining ₹700 · Minimum ₹1,000," "Official Brand Component Library · v1.0" — instead of commas or pipes.
- **Alerts explain, then instruct:** title states the situation ("Fee is higher than request"), description tells the user what to do about it ("Increase your withdrawal amount.") — never just a status word alone.

## Visual foundations

- **Color:** a single brand blue (`#0072BC` "Future Blue") is the only accent used for primary actions and links; navy (`#070F26`) is the ink color for headings and the dark feature-card surface. Status colors (green/orange/red) are reserved strictly for semantic feedback (success/warning/error) — never decorative. Tinted pastel backgrounds (`#E6F1FA`, `#E7F8EF`, `#FFF1E6`, `#FCEAE6`) pair 1:1 with their solid counterpart for tags/alerts icon badges.
- **Type:** two families doing two jobs — Noto Serif (600/700) for headings and big monetary figures ("₹5,182"), Noto Sans (400–700) for everything interactive/UI (buttons, labels, body), Inter (400/700) only for tiny meta/eyebrow text (12px). This is an unusual serif-for-numbers choice — it's what makes the big withdrawal amount feel considered rather than a generic dashboard stat.
- **Spacing:** a small, exact scale — 4 / 8 / 12 / 16 / 24 / 32 / 48px (`space/xxs`…`space/xxl`). Not a generic 8px-only grid; 4px and 12px steps are real and used often (button gaps, alert padding).
- **Radius:** components use larger, softer radii than most fintech UI — buttons 9–14px depending on size, inputs 10px, cards 12–16px, pills 999px. Nothing is sharp-cornered.
- **Borders vs. shadows:** almost all "borders" are actually `inset` box-shadows (`inset 0 0 0 1px …`), not real CSS borders — this keeps layout stable across states (hover doesn't shift box size). Only the feature card's internal divider uses a real hairline border (`1px solid rgba(255,255,255,0.1)`).
- **Elevation:** one soft, wide shadow (`0px 6px 16px rgba(7,15,38,0.1)`) for elevated cards/dropdowns — no hard drop shadows.
- **Focus state:** a colored inset border plus a soft 3px outer glow in the same hue at 18% opacity (`inset 0 0 0 1px var(--color-primary), 0 0 0 3px rgba(0,114,188,0.18)`) — not a generic browser outline.
- **Hover states:** primary buttons darken (blue → darker blue); outlined/neutral buttons tint their background toward the accent color and pick up a colored border; text buttons gain a soft tinted background. Disabled states desaturate everything to the same gray-on-gray-layout treatment regardless of type.
- **Dark mode:** a real second mode exists in the token set (not just an inverted gray) — brand blue shifts lighter (`#19A3FC`) for contrast on navy, and status colors shift to lighter/brighter variants rather than staying identical.
- **Backgrounds:** flat fills only — no gradients, no photography, no illustration, no texture/grain/noise anywhere in the source. The one "hero" surface (the feature card) is a solid navy fill with a thin accent progress bar, not an image.
- **Imagery:** none in the source — no photos, avatars, or illustrations were found to copy.
- **Animation:** not specified in the static specimen; treat as standard fast UI transitions (150ms ease) on hover/press states, nothing bespoke or bouncy implied by the source.

## Caveats

- **No logo/brand mark in the source.** Wherever a mark would go, the brand renders as type.
- **No font files were attached.** Noto Serif / Noto Sans / Inter are loaded from Google Fonts as the nearest (in this case exact-name) match — flagging in case the real product ships custom font files.
- **No Figma TEXT styles were defined** (METADATA's "Fonts" section lists raw font usage, not named text styles) — the type scale in `tokens/typography.css` was hand-transcribed from the "03 — Typography Scale" specimen table in the source frame, not machine-materialized.
- Only one screen family (mobile Earned Wage Access flow) is represented in the source frame — the UI kit reflects only what's shown there (dashboard summary, withdraw form, history list). There is no evidence of other surfaces (settings, onboarding, etc.) in the file.
