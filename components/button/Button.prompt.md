The NDPS action button — 4 types × 3 sizes, with built-in hover/disabled states.

```jsx
<Button type="primary" size="medium" onClick={() => {}}>Withdraw Now</Button>
<Button type="default" size="small">Learn more</Button>
<Button type="neutral" size="large">Cancel</Button>
<Button type="text" size="medium">View History</Button>
<Button type="primary" disabled>Unavailable</Button>
```

Variants: `type` = `primary` (filled, brand blue — main CTA), `default` (outlined, turns blue on hover — secondary CTA), `neutral` (outlined, gray — tertiary/cancel), `text` (no fill or border — lowest emphasis, e.g. "View History"). `size` = `small` (32px) / `medium` (40px) / `large` (48px). `disabled` greys out fill, border and text together.
