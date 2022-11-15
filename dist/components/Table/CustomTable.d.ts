import { ReactNode, TableHTMLAttributes } from 'react';
import { SxProps } from '@mui/system';
declare type ElementProps = Omit<TableHTMLAttributes<HTMLTableElement>, keyof Props>;
/**
 * @caption: テーブルフッター（左下）に付与する説明文のオプション
 */
declare type Props = {
    children?: ReactNode;
    caption?: string;
    sx?: SxProps;
};
export declare const CustomTable: ({ children, caption, sx, ...props }: Props & ElementProps) => JSX.Element;
export {};
//# sourceMappingURL=CustomTable.d.ts.map