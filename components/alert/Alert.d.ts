import { CSSProperties } from "react";

export interface AlertProps {
  variant?: "info" | "success" | "warning" | "error";
  title: string;
  description: string;
  style?: CSSProperties;
}

export function Alert(props: AlertProps): JSX.Element;
