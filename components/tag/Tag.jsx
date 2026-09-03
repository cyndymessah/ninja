import React from "react";

const VARIANT = {
  primary: { bg: "var(--color-primary-bg)", color: "var(--color-primary)" },
  success: { bg: "var(--status-success-bg)", color: "var(--status-success)" },
  warning: { bg: "var(--status-warning-bg)", color: "var(--status-warning)" },
  error: { bg: "var(--status-error-bg)", color: "var(--status-error)" },
  neutral: { bg: "var(--bg-layout)", color: "var(--text-secondary)" },
};

export function Tag({ variant = "primary", children = "Tag", style }) {
  const v = VARIANT[variant] || VARIANT.primary;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "4px 11px",
        borderRadius: "var(--radius-pill-px)",
        background: v.bg,
        color: v.color,
        fontFamily: "var(--font-sans)",
        fontWeight: 700,
        fontSize: 12,
        whiteSpace: "nowrap",
        ...style,
      }}
    >
      {children}
    </span>
  );
}
