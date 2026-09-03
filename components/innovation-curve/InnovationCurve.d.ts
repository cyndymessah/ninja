import { CSSProperties } from "react";

export interface InnovationCurveProps {
  /** "wireframe" (outline only) or "solid" (filled curve). Default "wireframe". */
  variant?: "wireframe" | "solid";
  /** Square render size in px. Default 271. */
  size?: number;
  /** Stroke / fill color. DARK BACKGROUNDS ONLY. Default white. */
  color?: string;
  /** Opacity of the grid + curve strokes. Default 0.5. */
  gridOpacity?: number;
  style?: CSSProperties;
}

/**
 * NTT DATA Innovation Curve brand graphic. Curve:Grid stroke ratio fixed at 2:1.
 * Use only on navy (--core-navy-smart) or future-blue (--core-blue-future) backgrounds.
 */
export function InnovationCurve(props: InnovationCurveProps): JSX.Element;
