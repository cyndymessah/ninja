const RECENT_WITHDRAWALS = [
  { title: "Withdrawal (HR approval)", date: "20 Jun 2026", amount: "₹3,000", status: "Awaiting approval", variant: "warning" },
  { title: "Withdrawal to Wallet", date: "12 Jun 2026", amount: "₹2,500", status: "Credited", variant: "success" },
  { title: "Withdrawal to Wallet", date: "5 Jun 2026", amount: "₹1,500", status: "Credited", variant: "success" },
];

function IconBadge({ children }) {
  return (
    <div
      style={{
        width: 34, height: 34, flexShrink: 0, borderRadius: 10,
        background: "var(--color-primary-bg)", color: "var(--color-primary)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 15, fontWeight: 700,
      }}
    >
      {children}
    </div>
  );
}

function DashboardScreen({ onWithdraw, onHistory }) {
  const { Button, Tag } = window.NDPSDesignSystem_82df03;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: 20, paddingBottom: 90 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ flex: 1, minWidth: 0, whiteSpace: "nowrap", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, color: "var(--text-heading)" }}>
          Earned Wage Access
        </div>
      </div>

      {/* Balance card */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "var(--radius-card-px)",
          background: "var(--core-navy-smart)",
          padding: 22,
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <svg viewBox="0 0 200 200" fill="none" style={{ position: "absolute", right: -50, bottom: -70, width: 280, height: 280, opacity: 0.5, pointerEvents: "none" }}>
          <path d="M-20 210 C 40 150, 60 90, 210 -20" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
          <path d="M-20 240 C 60 170, 80 100, 240 -20" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
        </svg>

        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.65)" }}>
              Available to withdraw today
            </span>
            <span style={{ width: 15, height: 15, borderRadius: 99, boxShadow: "inset 0 0 0 1.5px rgba(255,255,255,0.4)", color: "rgba(255,255,255,0.55)", font: "600 10px/15px var(--font-sans)", textAlign: "center" }}>i</span>
          </div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 46, lineHeight: 1, color: "var(--core-white)", marginTop: 8 }}>
            ₹9,500
          </div>
        </div>

        <div>
          <div style={{ height: 7, borderRadius: 99, background: "rgba(255,255,255,0.16)" }}>
            <div style={{ height: "100%", width: "30%", borderRadius: 99, background: "var(--core-blue-50)" }} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-sans)", fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 10 }}>
            <span>₹4,000 withdrawn</span>
            <span>₹13,500 cap</span>
          </div>
        </div>

        <div style={{ display: "flex", gap: 16, paddingTop: 18, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)" }}>Working days</div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 23, color: "var(--core-white)", marginTop: 6 }}>18/30</div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)" }}>Earned so far</div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 23, color: "var(--core-white)", marginTop: 6 }}>₹27,000</div>
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <Button type="primary" size="large" style={{ width: "100%" }} onClick={onWithdraw}>
            Withdraw money
          </Button>
        </div>
      </div>

      {/* Recent withdrawals */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, color: "var(--text-heading)" }}>
          Recent withdrawals
        </div>
        {RECENT_WITHDRAWALS.map((row, i) => (
          <div
            key={i}
            style={{
              display: "flex", alignItems: "center", gap: 12,
              padding: "12px 14px", borderRadius: 12,
              background: "var(--bg-container)", boxShadow: "inset 0 0 0 1px var(--border-default)",
            }}
          >
            <IconBadge>↓</IconBadge>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 13.5, color: "var(--text-heading)" }}>
                {row.title}
              </div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: "var(--text-muted)" }}>{row.date}</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
              <span style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 13.5, color: "var(--text-heading)" }}>
                {row.amount}
              </span>
              <Tag variant={row.variant}>{row.status}</Tag>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
