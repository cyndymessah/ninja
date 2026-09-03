import { ReactNode, CSSProperties, MouseEventHandler } from "react";

export interface ButtonProps {
  /** Visual type. Primary = filled brand blue. Default = outlined, blue on hover. Neutral = outlined, gray. Text = no fill/border. */
  type?: "primary" | "default" | "neutral" | "text";
  /** Small=32px / Medium=40px / Large=48px tall. */
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
