import React from "react";

/**
 * NTT DATA Innovation Curve — brand graphic.
 * Two parts: the "Curve" (heavy stroke / fill) and the "Grid" (light stroke).
 * Stroke-weight ratio is fixed at 2:1 (Curve : Grid).
 * DARK BACKGROUNDS ONLY (navy or future blue). Renders in `color` (default white).
 */
export function InnovationCurve({
  variant = "wireframe", // "wireframe" | "solid"
  size = 271,
  color = "#ffffff",
  gridOpacity = 0.5,
  style,
  ...rest
}) {
  const grid = "M90.7164 0.625332H83.0718H270.5V269.99H1.28521L1.16007 89.5009H270.266M270.266 179.306H0.5M90.7164 0.5V269.109M180.753 0.5V269.109";
  const curveOutline = "M90.6565 269.946V89.5215L180.993 270.044M1.20209 270.5V79.822C1.20209 79.822 2.19806 3.31024 81.2916 1.09264C145.684 -0.717344 162.954 57.252 185.295 99.6412C207.643 142.03 270.152 270.044 270.152 270.044";
  const curveFill = "M90.6565 89.5215V269.946L1.20209 270.5V79.822C1.20209 79.822 2.19806 3.31024 81.2916 1.09264C145.684 -0.717344 162.954 57.252 185.295 99.6412C207.643 142.03 270.152 270.044 270.152 270.044H180.993L90.6565 89.5215Z";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 271 271"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      {...rest}
    >
      {/* Grid — light, 1x stroke */}
      <path d={grid} stroke={color} strokeOpacity={gridOpacity} strokeWidth={1} strokeLinecap="square" />
      {variant === "solid" ? (
        <>
          <path d={curveOutline} stroke={color} strokeOpacity={gridOpacity} strokeWidth={2} strokeMiterlimit={4.3} />
          {/* Curve — filled */}
          <path d={curveFill} fill={color} stroke={color} strokeOpacity={gridOpacity} strokeWidth={2} strokeMiterlimit={4.3} />
        </>
      ) : (
        /* Curve — 2x stroke, no fill */
        <path d={curveOutline} stroke={color} strokeOpacity={gridOpacity} strokeWidth={2} strokeMiterlimit={4.3} />
      )}
    </svg>
  );
}
