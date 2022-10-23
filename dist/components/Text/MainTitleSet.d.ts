import { SxProps } from '@mui/system';
import { ElementType } from 'react';
/**
 * 大見出しとサブタイトルをまとめて表示するコンポーネントです
 * Example: <MainTitleSet headingText={t('見出し表示')} subtitleText={t('サブタイトルで説明文追加')} />
 * @param variant 見出しのフォントの大きさレベル。 未指定時:h1 ページ最初はh1、その後はHTMLレベルに応じてh2、h3...
 * @param component 見出しの/HTML要素 未指定時:h1 基本的にはh1~h6
 * @param headingText 見出しの文字列
 * @param variantSubTitle 見出し下のサブタイトルバリエーション 未指定時:subtitle2
 * @param subtitleText サブタイトル本文
 * @param AdditionalProps 右端に追加するコンポーネントが必要な時に設置(例: ボタン。基本無くても良い）
//  * @param TitleWrapNone 見出しを囲む要素を無くす。
 * @param sxHeader 見出しの追加スタイル
 * @param sxSubTitle サブタイトルの追加スタイル
 *
 */
declare type MainTitleSetProps = Partial<{
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    component: ElementType;
    headingText: string;
    subtitleText: string;
    variantSubTitle: 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'button' | 'caption' | 'overline' | 'inherit';
    AdditionalProps: JSX.Element;
    sxHeader: SxProps;
    sxSubTitle: SxProps;
    gutterBottom: boolean;
}>;
declare const MainTitleSet: ({ variant, component, headingText, variantSubTitle, subtitleText, AdditionalProps, sxHeader, sxSubTitle, gutterBottom, }: MainTitleSetProps) => JSX.Element;
export default MainTitleSet;
//# sourceMappingURL=MainTitleSet.d.ts.map