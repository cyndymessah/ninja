import React from "react";

export function Descriptions({ title, columns = 2, items = [], style }) {
  return (
    <div
      style={{
        background: "var(--bg-elevated)",
        boxShadow: "inset 0 0 0 1px var(--border-default)",
        borderRadius: "var(--radius-card-px)",
        overflow: "hidden",
        fontFamily: "var(--font-sans)",
        ...style,
      }}
    >
      {title && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 24px",
            boxShadow: "inset 0 -1px 0 var(--border-default)",
            fontWeight: 700,
            fontSize: 15,
            color: "var(--text-heading)",
          }}
        >
          {title}
        </div>
      )}
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {items.map((item, i) => (
          <div
            key={i}
            style={{
              gridColumn: item.full ? `1 / -1` : undefined,
              padding: "14px 24px",
              boxShadow: "inset -1px 0 0 var(--border-default), inset 0 -1px 0 var(--border-default)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 11,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.02em",
                color: "var(--text-muted)",
                marginBottom: 4,
              }}
            >
              {item.label}
            </div>
            <div
              style={{
                fontSize: 14,
                color: "var(--text-heading)",
                display: "flex",
                alignItems: "center",
                gap: 8,
                flexWrap: "wrap",
              }}
            >
              {item.value ?? "—"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
