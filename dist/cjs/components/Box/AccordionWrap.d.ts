import { SxProps } from '@mui/system';
import { ElementType, ReactNode } from 'react';
declare type SetProps = {
    AccordionTitle: string;
    component?: ElementType;
    variant?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    AccordionSubTitle?: string;
    variantSubTitle?: 'subtitle1' | 'subtitle2' | 'caption' | 'overline';
    ExpandedName?: string;
    id?: string;
    InitOpen?: string;
    AccordionSx?: SxProps;
    SummarySx?: SxProps;
    DetailsSx?: SxProps;
    children?: ReactNode;
    disabled?: boolean;
    AdditionalProps?: JSX.Element;
    TooltipTitleIconComponent?: ReactNode;
};
export declare const AccordionWrap: ({ AccordionTitle, variant, component, AccordionSubTitle, variantSubTitle, ExpandedName, InitOpen, AccordionSx, SummarySx, DetailsSx, children, AdditionalProps, disabled, TooltipTitleIconComponent, }: SetProps) => JSX.Element;
export {};
//# sourceMappingURL=AccordionWrap.d.ts.map