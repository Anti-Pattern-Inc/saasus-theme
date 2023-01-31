import { CSSProperties } from '@mui/styles';
import { SxProps } from '@mui/system';
import { ReactNode } from 'react';
/**
 * BreakPoint: setting from theme/schemes/SaaSusTheme.ts
 * values: { xs: 0, sm: 480, md: 768, lg: 1024, xl: 1440 }
 */
declare type Props = {
    children: ReactNode;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'base' | 'mobile' | 'tablet' | 'laptop' | 'desktop' | 'wide' | false;
    fixed?: boolean;
    addGutter?: boolean;
    mb?: number | string;
    sx?: SxProps;
    style?: CSSProperties;
};
export declare const CustomContainer: ({ children, maxWidth, fixed, sx, addGutter, mb, style, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=CustomContainer.d.ts.map