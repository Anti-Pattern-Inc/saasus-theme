import { SxProps } from '@mui/system';
import { ElementType, ReactNode, VFC } from 'react';
declare type TitleSetProps = Partial<{
    variant: 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'button' | 'caption' | 'overline' | 'inherit';
    component: ElementType;
    headingText: string;
    subtitleText: string;
    variantSubTitle: 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'button' | 'caption' | 'overline' | 'inherit';
    AdditionalProps: JSX.Element;
    sxHeader: SxProps;
    sxSubTitle: SxProps;
    sx: SxProps;
    gutterBottom: boolean;
    noMargin: boolean;
    mbSmall: boolean;
    mbLarge: boolean;
    style: SxProps;
    TooltipTitleIconComponent?: ReactNode;
    divider: boolean;
    dividerSx: SxProps;
}>;
declare const TitleSet: VFC<TitleSetProps>;
export default TitleSet;
//# sourceMappingURL=TitleSet.d.ts.map