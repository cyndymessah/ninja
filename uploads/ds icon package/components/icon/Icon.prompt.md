Single-color outline icon from the Finicon set (finicon.app, free for commercial use).

```jsx
<Icon name="dashboard" />                    {/* 20px, inherits color */}
<Icon name="approve" size="sm" />            {/* 16px */}
<Icon name="alert" size={24} title="Alert" /> {/* labelled, 24px */}
```

18 glyphs: alert, approve, back, calendar, companies, dashboard, disbursement, export, menu, refresh, reject, report, requests, rupee, search, trendDown, trend, users (plus `people`, an alias of `users`).

Rules:
- **Geometry:** 24x24 viewBox, stroke `2`, round caps and joins. Never re-scale stroke per size — the viewBox scales it.
- **Sizes:** `sm` 16 / `md` 20 (default) / `lg` 24. Nav items, buttons and table actions use `md`; inline text affordances (status chips, field adornments) use `sm`.
- **Color:** always `currentColor` — set color on the parent (button, nav item, tag) so hover and active states carry through. Don't pass `color` unless the icon is decoupled from its container's text color.
- **Never** hard-code fills, add a second color, or mix in glyphs from another set.

Plain-HTML pages that can't mount React use the same data via `icons/icon-registry.js`:

```html
<script src="icons/icon-registry.js"></script>
<span class="ico" data-icon="dashboard"></span>
```
