import { TableCellProps } from '@mui/material';
import { ReactNode } from 'react';
declare type ElementProps = TableCellProps;
declare type Props = {
    children: ReactNode;
    minWidthValue?: number;
    maxWidthValue?: number;
    noWrap?: boolean;
};
export declare const CustomTableCell: ({ children, minWidthValue, maxWidthValue, noWrap, ...props }: Props & ElementProps) => JSX.Element;
export declare const CustomTableCellAction: ({ children, ...props }: Props & ElementProps) => JSX.Element;
export {};
//# sourceMappingURL=CustomTableCell.d.ts.map