import { Box, Grid, Typography, useTheme } from '@mui/material'
import { SxProps } from '@mui/system'
import PageTitleWrapper from '../PageTitleWrapper'
import { ElementType, VFC } from 'react'

/**
 * 大見出しとサブタイトルをまとめて表示するコンポーネントです
 * Example: <MainTitleSet headingText={t('見出し表示')} subtitleText={t('サブタイトルで説明文追加')} />
 * @param variant 見出しのフォントの大きさレベル。 未指定時:h1 ページ最初はh1、その後はHTMLレベルに応じてh2、h3...
 * @param component 見出しの/HTML要素 未指定時:h1 基本的にはh1~h6
 * @param headingText 見出しの文字列
 * @param variantSubTitle 見出し下のサブタイトルバリエーション 未指定時:subtitle2
 * @param subtitleText サブタイトル本文
 * @param additionalProps 右端に追加するコンポーネントが必要な時に設置(例: ボタン。基本無くても良い）
 * @param TitleWrapNone 見出しを囲む要素を無くす。
 * @param sxHeader 見出しの追加スタイル
 * @param sxSubTitle サブタイトルの追加スタイル
 *
 */

type MainTitleSetProps = Partial<{
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
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
  additionalProps: JSX.Element
  TitleWrapNone: boolean
  sxHeader: SxProps
  sxSubTitle: SxProps
  gutterBottom: boolean
}>

// 大見出しとサブタイトル
const MainTitleSet: VFC<MainTitleSetProps> = ({
  variant,
  component,
  headingText,
  variantSubTitle,
  subtitleText,
  additionalProps,
  TitleWrapNone,
  sxHeader,
  sxSubTitle,
  gutterBottom,
}) => {
  const theme = useTheme()
  return (
    <>
      <Box
        sx={[
          {
            '.MuiPageTitle-wrapper': {
              p: theme.spacing(2, 4),
              mb: theme.spacing(3),
            },
          },
          // 背景の装飾が不要な場合
          TitleWrapNone && {
            '.MuiPageTitle-wrapper': {
              mb: theme.spacing(3),
              background: 'transparent',
              boxShadow: 'none',
            },
          },
        ]}
      >
        <PageTitleWrapper>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              {/* 見出し */}
              <Typography
                variant={variant ? variant : 'h1'}
                component={component ? component : 'h1'}
                sx={sxHeader}
                gutterBottom={gutterBottom}
                style={{ lineHeight: 1.4 }}
              >
                {headingText}
              </Typography>

              {/* サブタイトル */}
              <Typography
                variant={variantSubTitle ? variantSubTitle : 'subtitle1'}
                sx={sxSubTitle}
                style={{ lineHeight: 1.4 }}
              >
                {subtitleText}
              </Typography>
            </Grid>
            {/* 見出しと同じ階層内の右端に、ボタンなどのコンポーネントを置く時用
                Example: additionalProps={<Button>Action</Button>}
            */}
            <Grid item>{additionalProps}</Grid>
          </Grid>
        </PageTitleWrapper>
      </Box>
    </>
  )
}

export default MainTitleSet
