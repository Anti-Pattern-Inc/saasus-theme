import { SxProps } from '@mui/system';
import { ElementType, ReactNode } from 'react';
declare type Props = {
    accordionTitle: string;
    component?: ElementType;
    variant?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | undefined;
    accordionSubTitle?: string;
    variantSubTitle?: 'subtitle1' | 'subtitle2' | 'caption' | 'overline';
    defaultExpanded?: boolean;
    expanded?: boolean;
    onChange?: (_event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    id?: string;
    AccordionSx?: SxProps;
    AccordionSummarySx?: SxProps;
    DetailsSx?: SxProps;
    BorderNone?: boolean;
    spacing?: number;
    children?: ReactNode;
    disabled?: boolean;
    AdditionalProps?: JSX.Element;
    TooltipTitleIconComponent?: ReactNode;
    TooltipComponent?: ReactNode;
};
export declare const AccordionWrap: ({ accordionTitle, variant, component, accordionSubTitle, variantSubTitle, defaultExpanded, expanded, onChange, id, AccordionSx, AccordionSummarySx, DetailsSx, BorderNone, spacing, children, disabled, AdditionalProps, TooltipTitleIconComponent, TooltipComponent, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=AccordionWrap.d.ts.map