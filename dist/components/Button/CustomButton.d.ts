import { SxProps } from '@mui/system';
import React, { ReactNode } from 'react';
declare type Props = {
    children: ReactNode;
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
    size?: 'small' | 'medium' | 'large';
    variant?: 'contained' | 'outlined' | 'text';
    type?: 'submit' | 'reset' | 'button';
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    sx?: SxProps;
    disabled?: boolean;
    onClick?: (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
export declare const CustomButton: ({ color, variant, size, type, startIcon, endIcon, disabled, onClick, sx, children, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=CustomButton.d.ts.map