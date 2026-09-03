export type IconName =
  | "alert"
  | "approve"
  | "back"
  | "calendar"
  | "companies"
  | "dashboard"
  | "disbursement"
  | "export"
  | "menu"
  | "refresh"
  | "reject"
  | "report"
  | "requests"
  | "rupee"
  | "search"
  | "trendDown"
  | "trend"
  | "users";

export type IconSize = "sm" | "md" | "lg" | number;

export interface IconProps {
  /** Glyph name from the Finicon set. */
  name: IconName;
  /** Token size ("sm" 16 / "md" 20 / "lg" 24) or an explicit px value. Default "md". */
  size?: IconSize;
  /** Overrides the inherited color. Prefer inheriting via currentColor. */
  color?: string;
  /** Accessible label. Omit for decorative icons (renders aria-hidden). */
  title?: string;
  style?: React.CSSProperties;
}

export declare function Icon(props: IconProps): JSX.Element | null;
export declare const iconNames: IconName[];
