import { ChangeEventHandler, CSSProperties } from "react";

export interface InputProps {
  label?: string;
  value?: string;
  placeholder?: string;
  /** Small hint or validation text shown below the field. */
  helper?: string;
  state?: "default" | "focus" | "error" | "disabled";
  onChange?: ChangeEventHandler<HTMLInputElement>;
  style?: CSSProperties;
}

export function Input(props: InputProps): JSX.Element;
