import { SxProps } from '@mui/system';
import { ReactNode, TableHTMLAttributes } from 'react';
declare type ElementProps = Omit<TableHTMLAttributes<HTMLTableElement>, keyof Props>;
declare type Props = {
    children: ReactNode;
    maxHeightValue?: number | string;
    sx?: SxProps;
};
export declare const CustomTableContainer: ({ children, maxHeightValue, sx, ...props }: Props & ElementProps) => JSX.Element;
export {};
//# sourceMappingURL=CustomTableContainer.d.ts.map