import React from "react";
import { iconPaths, iconViewBox, iconSize } from "../../icons/icon-paths.js";

/* Icon renders a Finicon glyph at a token size, inheriting color from its parent
   (currentColor). Size accepts a token name ("sm" | "md" | "lg") or a px number. */
export function Icon({ name, size = "md", color, title, style }) {
  const body = iconPaths[name];
  const px = typeof size === "number" ? size : iconSize[size] || iconSize.md;

  if (!body) {
    if (typeof console !== "undefined") console.warn("Icon: unknown name \"" + name + "\"");
    return null;
  }

  return (
    <span
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      style={{
        display: "inline-flex",
        flexShrink: 0,
        width: px,
        height: px,
        color: color || "inherit",
        ...style,
      }}
      dangerouslySetInnerHTML={{
        __html:
          '<svg width="100%" height="100%" viewBox="' + iconViewBox + '" fill="none">' + body + "</svg>",
      }}
    />
  );
}

export const iconNames = Object.keys(iconPaths);
