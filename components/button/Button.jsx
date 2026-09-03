import React from "react";

const SIZE = {
  small: { height: 32, radius: "var(--radius-btn-sm)", paddingX: 14, fontSize: "var(--text-button-sm-size)" },
  medium: { height: 40, radius: "var(--radius-btn-md)", paddingX: 20, fontSize: "var(--text-button-md-size)" },
  large: { height: 48, radius: "var(--radius-btn-lg)", paddingX: 26, fontSize: "var(--text-button-lg-size)" },
};

// type -> { bg, border, color, hoverBg, hoverBorder, hoverColor }
const TYPE = {
  primary: {
    bg: "var(--color-primary)", border: "none", color: "var(--on-primary)",
    hoverBg: "var(--color-primary-hover)", hoverBorder: "none", hoverColor: "var(--on-primary)",
  },
  default: {
    bg: "var(--bg-container)", border: "inset 0 0 0 1px var(--border-default)", color: "var(--text-heading)",
    hoverBg: "var(--color-primary-bg)", hoverBorder: "inset 0 0 0 1px var(--color-primary)", hoverColor: "var(--color-primary)",
  },
  neutral: {
    bg: "var(--bg-container)", border: "inset 0 0 0 1px var(--border-default)", color: "var(--text-heading)",
    hoverBg: "var(--bg-layout)", hoverBorder: "inset 0 0 0 1px var(--border-default)", hoverColor: "var(--text-heading)",
  },
  text: {
    bg: "transparent", border: "none", color: "var(--core-gray-text)",
    hoverBg: "var(--color-primary-bg)", hoverBorder: "none", hoverColor: "var(--color-primary)",
  },
};

export function Button({ type = "primary", size = "medium", disabled = false, children = "Button", onClick, style }) {
  const [hover, setHover] = React.useState(false);
  const s = SIZE[size] || SIZE.medium;
  const t = TYPE[type] || TYPE.primary;

  let background = t.bg;
  let boxShadow = t.border === "none" ? undefined : t.border;
  let color = t.color;

  if (disabled) {
    background = "var(--bg-layout)";
    boxShadow = "inset 0 0 0 1px var(--border-default)";
    color = "var(--text-disabled)";
  } else if (hover) {
    background = t.hoverBg;
    boxShadow = t.hoverBorder === "none" ? undefined : t.hoverBorder;
    color = t.hoverColor;
  }

  return (
    <button
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      disabled={disabled}
      style={{
        height: s.height,
        borderRadius: s.radius,
        padding: `0 ${s.paddingX}px`,
        background,
        boxShadow,
        border: "none",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-sans)",
        fontWeight: 700,
        fontSize: s.fontSize,
        color,
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "background 0.15s ease, box-shadow 0.15s ease, color 0.15s ease",
        whiteSpace: "nowrap",
        ...style,
      }}
    >
      {children}
    </button>
  );
}
