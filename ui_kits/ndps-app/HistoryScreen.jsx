const ROWS = [
  { date: "12 Jan 2026", amount: "₹2,000", status: "success" },
  { date: "28 Dec 2025", amount: "₹1,500", status: "success" },
  { date: "14 Dec 2025", amount: "₹3,200", status: "warning" },
  { date: "1 Dec 2025", amount: "₹800", status: "error" },
  { date: "18 Nov 2025", amount: "₹1,000", status: "neutral" },
];

const STATUS_LABEL = { success: "Approved", warning: "Pending", error: "Declined", neutral: "Draft" };
const STATUS_VARIANT = { success: "success", warning: "warning", error: "error", neutral: "neutral" };

function HistoryScreen({ onBack, justWithdrew }) {
  const { Tag } = window.NDPSDesignSystem_82df03;
  const rows = justWithdrew ? [{ date: "Today", amount: `₹${justWithdrew}`, status: "warning" }, ...ROWS] : ROWS;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: 20 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <button
          onClick={onBack}
          style={{ border: "none", background: "none", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 20, color: "var(--text-heading)", padding: 0 }}
        >
          ←
        </button>
        <div style={{ flex: 1, minWidth: 0, whiteSpace: "nowrap", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 20, color: "var(--text-heading)" }}>
          Withdrawal history
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {rows.map((row, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "14px 16px",
              borderRadius: 12,
              background: "var(--bg-container)",
              boxShadow: "inset 0 0 0 1px var(--border-default)",
            }}
          >
            <div>
              <div style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 14, color: "var(--text-heading)" }}>
                {row.amount}
              </div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: "var(--text-muted)" }}>{row.date}</div>
            </div>
            <Tag variant={STATUS_VARIANT[row.status]}>{STATUS_LABEL[row.status]}</Tag>
          </div>
        ))}
      </div>
    </div>
  );
}
