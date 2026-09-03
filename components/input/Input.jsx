import React from "react";

export function Input({ label = "Amount", value = "", placeholder, helper, state = "default", onChange, style }) {
  const effective = state === "disabled" ? "disabled" : state;

  let boxShadow = "inset 0 0 0 1px var(--border-default)";
  let bg = "var(--bg-container)";
  let color = "var(--text-heading)";
  let helperColor = "var(--text-muted)";

  if (effective === "focus") {
    boxShadow = "inset 0 0 0 1px var(--color-primary), var(--shadow-focus-ring)";
  } else if (effective === "error") {
    boxShadow = "inset 0 0 0 1px var(--status-error)";
    helperColor = "var(--status-error)";
  } else if (effective === "disabled") {
    bg = "var(--bg-layout)";
    color = "var(--text-disabled)";
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "flex-start", ...style }}>
      <span style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 12, color: "var(--core-gray-text)" }}>
        {label}
      </span>
      <div
        style={{
          height: 40,
          width: "100%",
          borderRadius: "var(--radius-input)",
          background: bg,
          boxShadow,
          display: "flex",
          alignItems: "center",
          padding: "0 12px",
          boxSizing: "border-box",
        }}
      >
        {effective === "disabled" ? (
          <span style={{ fontFamily: "var(--font-sans)", fontWeight: 400, fontSize: 14, color }}>{value || placeholder}</span>
        ) : (
          <input
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            style={{
              border: "none",
              outline: "none",
              background: "transparent",
              width: "100%",
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              fontSize: 14,
              color,
            }}
          />
        )}
      </div>
      {helper ? (
        <span style={{ fontFamily: "var(--font-sans)", fontWeight: 400, fontSize: 11, color: helperColor }}>{helper}</span>
      ) : null}
    </div>
  );
}
