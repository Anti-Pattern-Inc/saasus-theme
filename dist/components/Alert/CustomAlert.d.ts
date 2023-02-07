import { SxProps } from '@mui/system';
import { ReactNode } from 'react';
declare type Props = Partial<{
    severity: 'error' | 'warning' | 'info' | 'success';
    variant: 'filled' | 'outlined' | 'standard';
    alertHeadingTitle: string;
    children: ReactNode;
    square: boolean;
    action: ReactNode;
    sx: SxProps;
}>;
export declare const CustomAlert: ({ severity, variant, alertHeadingTitle, children, square, action, sx, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=CustomAlert.d.ts.map