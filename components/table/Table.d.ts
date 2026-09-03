import { ReactNode, CSSProperties } from "react";

export interface TableColumn {
  /** Row object key to read the cell value from. */
  key?: string;
  /** Column header label. */
  title?: ReactNode;
  /** Text alignment for the column. Default "left". */
  align?: "left" | "center" | "right";
  /** Render monetary figures in the display font with tabular numerals. */
  amount?: boolean;
  /** Sticky right-aligned action column (e.g. row buttons). */
  action?: boolean;
  /** Custom cell renderer; receives the whole row. Overrides key lookup. */
  render?: (row: Record<string, any>) => ReactNode;
}

export interface TableProps {
  columns?: TableColumn[];
  data?: Array<Record<string, any>>;
  style?: CSSProperties;
}

export function Table(props: TableProps): JSX.Element;
