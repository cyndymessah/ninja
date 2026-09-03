import { ReactNode, CSSProperties } from "react";

export interface TagProps {
  variant?: "primary" | "success" | "warning" | "error" | "neutral";
  children?: ReactNode;
  style?: CSSProperties;
}

export function Tag(props: TagProps): JSX.Element;
