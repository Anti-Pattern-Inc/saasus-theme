import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import {
  Box,
  Button,
  Divider,
  Grid,
  styled,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material'
import { SxProps } from '@mui/system'
import { ElementType, ReactNode, VFC } from 'react'
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

const AddToolTip = styled(Tooltip)(
  () => `
  .MuiTooltip-popper{
    max-width: calc(125em + 16px);
  }
`,
)

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
  TooltipTitleIconComponent?: ReactNode
  // 下線
  divider: boolean
  dividerSx: SxProps
}>

// 中見出しとサブタイトル
const TitleSet: VFC<TitleSetProps> = ({
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
  // 下線
  divider,
  dividerSx,
}) => {
  const theme = useTheme()

  return (
    <>
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
          sx={{ mb: noMargin ? 0 : 1 }}
        >
          <Grid item sx={style}>
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
              {TooltipTitleIconComponent && (
                <AddToolTip
                  title={TooltipTitleIconComponent}
                  arrow
                  placement="top-start"
                >
                  <Button
                    sx={{
                      margin: '0 0 .2em 0',
                      '&.MuiButton-root': {
                        padding: '6px',
                        minWidth: 'fit-content',
                      },
                    }}
                  >
                    <HelpOutlineIcon fontSize="small" />
                  </Button>
                </AddToolTip>
              )}
            </Typography>

            {/* サブタイトル */}
            <Typography
              variant={variantSubTitle ? variantSubTitle : 'subtitle2'}
              sx={sxSubTitle}
              style={{ lineHeight: 1.4 }}
            >
              {subtitleText}
            </Typography>
          </Grid>

          {/* 見出しと同じ階層内の右端に、ボタンなどのコンポーネントを置く時用 */}
          <Grid item>{AdditionalProps}</Grid>
        </Grid>
        {/* </PageTitleWrapper> */}
        {/*下線がある時は追加 */}
        {divider && <Divider sx={dividerSx} />}
      </Box>
    </>
  )
}

export default TitleSet
