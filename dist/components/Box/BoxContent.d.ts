import { SxProps } from '@mui/system';
import { ElementType, ReactNode, VFC } from 'react';
/**
 * BoxContent Option:
 * @param addTitle 見出しをがある時は追加
 * @param headingText 見出しの文字列
 * @param component 見出しのコンポーネント/HTML要素
 * @param variant 見出しのフォントの大きさレベル。 未指定時:h4
 * @param subtitleText サブタイトル本文
 * @param variantSubTitle 見出し下のサブタイトルバリエーション 未指定時:subtitle2
 * @param titleSx 見出しの追加スタイル
 * @param boxInnerSx スタイルのカスタムがある時は追加
 * @param children コンテンツ本体
 * @param noMargin コンテンツの下マージンを無効化
 * @param mbSmall コンテンツの下マージンを小さく
 * @param mbLarge コンテンツの下マージンを大きく
 * @param divider 見出しの下線がある時は追加
 * @param dividerSx 下線にカスタムスタイルを追加
 * @param TooltipTitleIconComponent 見出し右横に表示するツールチップとアイコン
 * @param AdditionalProps 見出し右横に設置する追加のコンポーネント
 */
declare type Props = Partial<{
    addTitle: boolean;
    headingText: string;
    component: ElementType;
    variant: 'h4' | 'h5' | 'h6';
    subtitleText: string;
    variantSubTitle: 'subtitle1' | 'subtitle2' | 'caption' | 'overline';
    titleSx: SxProps;
    boxInnerSx: SxProps;
    children: ReactNode;
    noMargin: boolean;
    mbSmall: boolean;
    mbLarge: boolean;
    TooltipTitleIconComponent?: ReactNode;
    AdditionalProps: JSX.Element;
    divider: boolean;
    dividerSx: SxProps;
}>;
declare const BoxContent: VFC<Props>;
export default BoxContent;
//# sourceMappingURL=BoxContent.d.ts.map