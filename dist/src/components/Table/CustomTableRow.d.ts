import { ReactNode, TableHTMLAttributes } from 'react';
declare type ElementProps = Omit<TableHTMLAttributes<HTMLTableElement>, keyof Props>;
declare type Props = {
    children?: ReactNode;
};
export declare const CustomTableRow: ({ children }: Props & ElementProps) => JSX.Element;
export {};
//# sourceMappingURL=CustomTableRow.d.ts.map