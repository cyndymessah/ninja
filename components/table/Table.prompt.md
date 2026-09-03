The NDPS data table — a bordered, rounded table for transaction and record lists.

```jsx
<Table
  columns={[
    { key: "tx", title: "Transaction" },
    { key: "emp", title: "Employee" },
    { key: "amount", title: "Amount", amount: true, align: "right" },
    { key: "status", title: "Status", render: (r) => <Tag variant={r.tone}>{r.status}</Tag> },
    { title: "Action", action: true, render: () => <Button type="text" size="small">View</Button> },
  ]}
  data={[
    { tx: "TX0000000051", emp: "EMP-0421", amount: "₹1,000", status: "Approved", tone: "success" },
    { tx: "TX0000000050", emp: "EMP-0418", amount: "₹2,500", status: "Processing", tone: "warning" },
  ]}
/>
```

Header cells are uppercase, muted, on the layout background. Column flags: `amount` renders the cell in the display font with tabular numerals for aligned rupee figures; `action` makes the last column sticky to the right edge (stays visible on horizontal scroll) — use it for row buttons. `align` sets per-column text alignment. `render(row)` supplies custom cell content (tags, buttons) and overrides `key`. The whole table scrolls horizontally inside its rounded, bordered container.
