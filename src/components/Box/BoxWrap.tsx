import { Box, Paper, styled, useTheme } from '@mui/material'
import { SxProps } from '@mui/system'
import TitleSet from 'components/Text/TitleSet'
import { ElementType, ReactNode } from 'react'

/**
 * BoxWrap Option:
 * @param addTitle 見出しをがある時は追加
 * @param headingText 見出しの文字列
 * @param component 見出しのコンポーネント/HTML要素
 * @param variant 見出しのフォントの大きさレベル。 未指定時:h3
 * @param subtitleText サブタイトル本文
 * @param variantSubTitle 見出し下のサブタイトルバリエーション 未指定時:subtitle2
 * @param titleSx 見出しの追加スタイル
 * @param divider 見出しの下線がある時は追加
 * @param boxInnerSx スタイルのカスタムがある時は追加
 * @param children コンテンツ本体
 * @param noMargin コンテンツの下マージンを無効化
 * @param mbSmall コンテンツの下マージンを小さく
 * @param mbLarge コンテンツの下マージンを大きく
 * @param TooltipTitleIconComponent 見出し右横に表示するツールチップとアイコン
 * @param TooltipComponent デフォルトのアイコン以外のTooltipを設置する時
 * @param AdditionalProps 見出し右横に設置する追加のコンポーネント
 */

type Props = Partial<{
  // 見出し
  addTitle: boolean
  headingText: string
  component: ElementType
  variant: 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  subtitleText: string
  variantSubTitle: 'subtitle1' | 'subtitle2' | 'caption' | 'overline'
  titleSx: SxProps
  // 下線
  divider: boolean
  // コンテンツ
  boxInnerSx: SxProps
  children: ReactNode
  // 下マージン
  noMargin: boolean
  mbSmall: boolean
  mbLarge: boolean
  // ヘルプアイコンとツールチップ
  TooltipTitleIconComponent?: ReactNode
  TooltipComponent?: ReactNode
  // 右端オプション
  AdditionalProps: JSX.Element
  // 全体sx
  sx: SxProps
}>

const BoxInner = styled(Paper)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}))

const BoxWrap = ({
  // 見出し
  addTitle,
  variant,
  component,
  headingText,
  variantSubTitle,
  subtitleText,
  titleSx,
  // 下線
  divider,
  // コンテンツ
  children,
  boxInnerSx,
  // 下マージン
  noMargin,
  mbSmall,
  mbLarge,
  // ヘルプアイコンとツールチップ
  TooltipTitleIconComponent,
  TooltipComponent,
  // 右端オプション
  AdditionalProps,
  // 全体sx
  sx,
}: Props) => {
  const theme = useTheme()
  return (
    <Box sx={sx}>
      <BoxInner
        elevation={1}
        sx={{
          padding: divider ? theme.spacing(1.5, 3, 3) : theme.spacing(3),
          ...boxInnerSx,
        }}
      >
        {addTitle && (
          <TitleSet
            // 見出しフォントサイズ htmlElement設定 デフォルト値 サブタイトル設定
            headingText={headingText}
            variant={variant ? variant : 'h3'}
            component={component ? component : 'div'}
            subtitleText={subtitleText}
            variantSubTitle={variantSubTitle ? variantSubTitle : 'subtitle2'}
            // 見出し直下の余白具合
            noMargin={noMargin}
            mbSmall={mbSmall}
            mbLarge={mbLarge}
            // カスタムCSSがあれば設置
            sx={titleSx}
            // ヘルプアイコンとツールチップ
            TooltipTitleIconComponent={TooltipTitleIconComponent}
            TooltipComponent={TooltipComponent}
            AdditionalProps={AdditionalProps}
            // 下線
            divider={divider}
            // 下線がある時は見出し内の余白をタイトにする。横幅を合わせる
            dividerSx={{ my: 1.5, mx: -3 }}
          />
        )}
        {children}
      </BoxInner>
    </Box>
  )
}

export default BoxWrap
