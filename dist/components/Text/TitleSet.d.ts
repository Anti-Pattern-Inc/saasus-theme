import { SxProps } from '@mui/system';
import { ElementType, ReactNode } from 'react';
/**
 * 中見出しとサブタイトルをまとめて表示するコンポーネントです。
 * Example: <TitleSet headingText={t('見出し表示')} subtitleText={t('サブタイトルで説明文追加')} />
 * @param variant 見出し 未指定時:div フォントの大きさレベル。ページ最初はh2、その後はHTMLレベルに応じてh3、h4...
 * @param component 見出しのコンポーネント/HTML要素 未指定時:h2 基本的にはh1~h6
 * @param headingText 見出しの文字列
 * @param variantSubTitle 見出し下のサブタイトルバリエーション 未指定時:subtitle2
 * @param subtitleText サブタイトル本文
 * @param AdditionalProps 右端に追加するコンポーネントが必要な時に設置(例: ボタン。基本無くても良い）
 */
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
    TooltipComponent?: ReactNode;
    divider: boolean;
    dividerSx: SxProps;
}>;
export declare const TitleSet: ({ variant, component, headingText, variantSubTitle, subtitleText, AdditionalProps, sxHeader, sxSubTitle, sx, gutterBottom, noMargin, mbSmall, mbLarge, style, TooltipTitleIconComponent, TooltipComponent, divider, dividerSx, }: TitleSetProps) => JSX.Element;
export {};
//# sourceMappingURL=TitleSet.d.ts.map