import { CSSProperties } from "react";

export interface QuickAmountInputProps {
  /** field label shown above the amount, paired with an info tooltip glyph */
  label?: string;
  /** the large formatted amount readout, e.g. "₹5,000" */
  value?: string;
  /** quick-select preset chip labels, e.g. ["₹1,000", "₹2,500", "₹5,000", "Max"] */
  presets?: string[];
  /** index of the active/selected preset chip */
  selectedIndex?: number;
  onSelectPreset?: (index: number) => void;
  /** validation message shown below in error color; also tints the amount readout */
  error?: string;
  style?: CSSProperties;
}

export function QuickAmountInput(props: QuickAmountInputProps): JSX.Element;
