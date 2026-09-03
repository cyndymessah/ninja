Labeled text field for amounts / identifiers, with 4 visual states.

```jsx
<Input label="Amount" value="₹2,000" helper="Default border" />
<Input label="Amount" value="₹2,000" state="focus" helper="Focused — border color/primary" />
<Input label="Amount" value="₹40" state="error" helper="The ₹50 fee is more than amount." />
<Input label="Amount" value="Locked" state="disabled" helper="Disabled — bg/layout" />
```

`state`: `default` (subtle gray border), `focus` (blue border + soft outer glow), `error` (red border, red helper text), `disabled` (gray-layout fill, non-editable, muted text).
