import { Box, Divider, Grid, Typography, useTheme } from '@mui/material'
import { SxProps } from '@mui/system'
import { CustomTooltip } from 'components/Tooltip/CustomTooltip'
import { ElementType, ReactNode } from 'react'
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

// INFO: *variantのh1はMainTitleSetでのみ設置可能としたいです
type TitleSetProps = Partial<{
  variant:
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body1'
    | 'body2'
    | 'button'
    | 'caption'
    | 'overline'
    | 'inherit'
  component: ElementType
  headingText: string
  subtitleText: string
  variantSubTitle:
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'button'
    | 'caption'
    | 'overline'
    | 'inherit'
  AdditionalProps: JSX.Element
  sxHeader: SxProps
  sxSubTitle: SxProps
  sx: SxProps
  gutterBottom: boolean
  noMargin: boolean
  mbSmall: boolean
  mbLarge: boolean
  style: SxProps
  // ヘルプアイコンとツールチップ
  TooltipTitleIconComponent?: ReactNode // ツールチップに表示するアイコンとセット
  TooltipComponent?: ReactNode // デフォルトのアイコン以外のTooltipを設置する時
  // 下線
  divider: boolean
  dividerSx: SxProps
}>

// 中見出しとサブタイトル
const TitleSet = ({
  variant,
  component,
  headingText,
  variantSubTitle,
  subtitleText,
  AdditionalProps,
  sxHeader,
  sxSubTitle,
  sx,
  gutterBottom,
  noMargin,
  mbSmall,
  mbLarge,
  style,
  // ヘルプアイコンとツールチップ
  TooltipTitleIconComponent,
  TooltipComponent,
  // 下線
  divider,
  dividerSx,
}: TitleSetProps) => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        margin: noMargin
          ? theme.spacing(0)
          : mbSmall
          ? theme.spacing(0, 0, 1, 0)
          : mbLarge
          ? theme.spacing(0, 0, 5, 0)
          : theme.spacing(0, 0, 3, 0),
        '.MuiPageTitle-wrapper': {
          m: theme.spacing(0),
          p: theme.spacing(0),
          background: 'transparent',
          boxShadow: 'none',
        },
        ...sx,
      }}
    >
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        columnSpacing={2}
        sx={{
          '.MuiGrid-root': {
            [theme.breakpoints.down('tablet')]: {
              minWidth: '100%',
              display: 'flex',
              flexDirection: 'column',
              mb: noMargin ? 0 : 1,
            },
          },
        }}
      >
        <Grid item sx={style} flex={1}>
          {/* 見出し */}
          <Typography
            variant={variant}
            component={component ? component : 'div'}
            sx={sxHeader}
            gutterBottom={gutterBottom}
            style={{ lineHeight: 1.5 }}
          >
            {headingText}
            {/* ツールチップ */}
            <CustomTooltip
              TooltipTitleIconComponent={TooltipTitleIconComponent}
              TooltipComponent={TooltipComponent}
            />
          </Typography>

          {/* サブタイトル */}
          <Typography
            variant={variantSubTitle ? variantSubTitle : 'subtitle2'}
            sx={sxSubTitle}
            style={{ lineHeight: 1.4, textAlign: 'justify' }}
          >
            {subtitleText}
          </Typography>
        </Grid>

        {/* 見出しと同じ階層内の右端に、ボタンなどのコンポーネントを置く時用 */}
        {AdditionalProps && <Grid item>{AdditionalProps}</Grid>}
      </Grid>
      {/* </PageTitleWrapper> */}
      {/*下線がある時は追加 */}
      {divider && <Divider sx={dividerSx} />}
    </Box>
  )
}

export default TitleSet
