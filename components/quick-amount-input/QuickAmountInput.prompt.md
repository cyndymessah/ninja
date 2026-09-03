# QuickAmountInput

A withdrawal-amount entry card: a labeled amount readout (large, bold) above a row of quick-select preset chips (e.g. ₹1,000 / ₹2,500 / ₹5,000 / Max), with one chip active at a time. Pairs with an inline error message that tints both the amount readout and adds red helper text below the chips.

Distinct from the plain `Input` component (a labeled text field) — use `QuickAmountInput` specifically for money-amount entry with presets (withdraw flows, transfer amounts), and `Input` for everything else.
