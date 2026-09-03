import React from "react";

export function QuickAmountInput({
  label = "Amount",
  value = "₹0",
  presets = ["₹1,000", "₹2,500", "₹5,000", "Max"],
  selectedIndex = 2,
  onSelectPreset,
  error,
  style,
}) {
  return (
    <div
      style={{
        background: "var(--bg-container)",
        boxShadow: "inset 0 0 0 1px var(--border-default)",
        borderRadius: "var(--radius-card-px)",
        padding: "20px 24px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        fontFamily: "var(--font-sans)",
        width: 312,
        boxSizing: "border-box",
        ...style,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: "var(--text-secondary)" }}>{label}</span>
        <span
          title="The amount you'd like to withdraw"
          style={{
            width: 14,
            height: 14,
            borderRadius: "50%",
            boxShadow: "inset 0 0 0 1px var(--text-muted)",
            color: "var(--text-muted)",
            fontSize: 10,
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "default",
          }}
        >
          ?
        </span>
      </div>
      <div
        style={{
          fontFamily: "var(--text-heading-2-family, var(--font-sans))",
          fontWeight: 700,
          fontSize: 32,
          color: error ? "var(--status-error)" : "var(--text-heading)",
        }}
      >
        {value}
      </div>
      <div style={{ height: 1, background: "var(--border-secondary)" }} />
      <div style={{ display: "flex", gap: 8 }}>
        {presets.map((p, i) => {
          const active = i === selectedIndex;
          return (
            <button
              key={i}
              type="button"
              onClick={() => onSelectPreset && onSelectPreset(i)}
              style={{
                flex: 1,
                height: 33,
                border: "none",
                borderRadius: "var(--radius-btn-md, 9px)",
                background: active ? "var(--color-primary)" : "var(--bg-container)",
                boxShadow: active ? "none" : "inset 0 0 0 1px var(--color-primary)",
                color: active ? "var(--on-primary)" : "var(--color-primary)",
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: 12.5,
                cursor: "pointer",
              }}
            >
              {p}
            </button>
          );
        })}
      </div>
      {error ? (
        <span style={{ fontSize: 12, color: "var(--status-error)", fontWeight: 600 }}>{error}</span>
      ) : null}
    </div>
  );
}
