# Innovation Curve

The NTT DATA Innovation Curve brand graphic. It has two parts:
- **Curve** — the heavy "N"-shaped stroke (and, in the solid variant, a white fill).
- **Grid** — the light square grid behind it.

The stroke-weight ratio is fixed at **2:1 (Curve:Grid)** — do not override individual stroke widths.

## Rules
- **Dark backgrounds only.** Use on navy (`--core-navy-smart`, rgb 7 15 38) or future blue (`--core-blue-future`, rgb 0 114 188). Never on white/light surfaces.
- `variant="wireframe"` for subtle, large-scale backdrops (slide/section dividers, hero corners); `variant="solid"` when the curve should read as a filled mark.
- Common uses: full-bleed slide backdrop (position it bleeding off a corner), or a banner graphic.

## Example
```jsx
<div style={{ background: "var(--core-navy-smart)", position: "relative", overflow: "hidden" }}>
  <InnovationCurve variant="wireframe" size={520}
    style={{ position: "absolute", top: -40, right: -60 }} />
  {/* slide content */}
</div>
```
