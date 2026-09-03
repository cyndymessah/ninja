function WithdrawScreen({ onBack, onConfirm }) {
  const { Button, Input, Alert } = window.NDPSDesignSystem_82df03;
  const [amount, setAmount] = React.useState("2000");
  const fee = 50;
  const numeric = parseInt(amount || "0", 10);
  const feeTooHigh = numeric > 0 && fee > numeric * 0.05 && numeric < 1000;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20, padding: 20 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <button
          onClick={onBack}
          style={{ border: "none", background: "none", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 20, color: "var(--text-heading)", padding: 0 }}
        >
          ←
        </button>
        <div style={{ flex: 1, minWidth: 0, whiteSpace: "nowrap", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 20, color: "var(--text-heading)" }}>
          Withdraw money
        </div>
      </div>

      <div
        style={{
          borderRadius: 16,
          background: "var(--bg-container)",
          boxShadow: "inset 0 0 0 1px var(--border-default)",
          padding: 24,
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <Input
          label="Amount"
          value={`₹${amount}`}
          state={feeTooHigh ? "error" : "focus"}
          helper={feeTooHigh ? `The ₹${fee} fee is more than your amount.` : "Focused — border color/primary"}
          onChange={(e) => setAmount(e.target.value.replace(/[^0-9]/g, ""))}
        />
        <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--text-secondary)" }}>
          Minimum ₹1,000 · Eligible ₹640
        </div>
      </div>

      {feeTooHigh ? (
        <Alert variant="error" title="Fee is higher than request" description="Increase your withdrawal amount." />
      ) : (
        <Alert variant="warning" title="Monthly limit nearly used" description="Remaining ₹700 · Minimum ₹1,000." />
      )}

      <div style={{ display: "flex", gap: 12 }}>
        <Button type="primary" size="medium" disabled={feeTooHigh} onClick={onConfirm}>Confirm Withdrawal</Button>
        <Button type="neutral" size="medium" onClick={onBack}>Cancel</Button>
      </div>
    </div>
  );
}
