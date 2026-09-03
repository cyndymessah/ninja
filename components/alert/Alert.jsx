import React from "react";

const VARIANT = {
  info: { bg: "var(--status-info-bg)", iconBg: "var(--status-info)", icon: "i" },
  success: { bg: "var(--status-success-bg)", iconBg: "var(--status-success)", icon: "\u2713" },
  warning: { bg: "var(--status-warning-bg)", iconBg: "var(--status-warning)", icon: "!" },
  error: { bg: "var(--status-error-bg)", iconBg: "var(--status-error)", icon: "\u00d7" },
};

export function Alert({ variant = "info", title, description, style }) {
  const v = VARIANT[variant] || VARIANT.info;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 12,
        alignItems: "center",
        padding: "14px 15px",
        borderRadius: "var(--radius-alert)",
        background: v.bg,
        boxSizing: "border-box",
        ...style,
      }}
    >
      <div
        style={{
          width: 34,
          height: 34,
          flexShrink: 0,
          borderRadius: 10,
          background: v.iconBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--core-white)",
          fontFamily: "var(--font-sans)",
          fontWeight: 700,
          fontSize: 15,
        }}
      >
        {v.icon}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 3, minWidth: 0 }}>
        <span style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 13, color: "var(--text-heading)" }}>
          {title}
        </span>
        <span style={{ fontFamily: "var(--font-sans)", fontWeight: 400, fontSize: 12, color: "var(--core-gray-text)" }}>
          {description}
        </span>
      </div>
    </div>
  );
}
