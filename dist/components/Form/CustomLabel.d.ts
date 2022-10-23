import { ReactNode } from 'react';
import { SxProps } from '@mui/system';
declare type Props = {
    id?: string;
    TooltipTitleIconComponent?: ReactNode;
    TooltipComponent?: ReactNode;
    children: ReactNode;
    OptionalChip?: ReactNode;
    chipLabel?: string;
    size?: 'medium' | 'small';
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
    variant?: 'filled' | 'outlined';
    sx?: SxProps;
};
export declare const CustomLabel: ({ id, TooltipTitleIconComponent, TooltipComponent, children, OptionalChip, chipLabel, color, size, sx, variant, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=CustomLabel.d.ts.map