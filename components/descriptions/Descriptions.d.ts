import { ReactNode, CSSProperties } from "react";

export interface DescriptionsItem {
  label: string;
  value?: ReactNode;
  /** span the full grid width */
  full?: boolean;
}

export interface DescriptionsProps {
  /** optional card header */
  title?: string;
  /** number of grid columns, default 2 */
  columns?: number;
  items?: DescriptionsItem[];
  style?: CSSProperties;
}

export function Descriptions(props: DescriptionsProps): JSX.Element;
