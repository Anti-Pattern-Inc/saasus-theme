// https://mui.com/material-ui/react-accordion/
// Icon
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
// MUI
import {
  Accordion,
  AccordionDetails,
  AccordionProps,
  AccordionSummary,
  AccordionSummaryProps,
  Box,
  Paper,
  styled,
  Typography,
} from '@mui/material'
import { SxProps } from '@mui/system'
import { CustomTooltip } from 'components/Tooltip/CustomTooltip'
import { ElementType, ReactNode } from 'react'

type Props = {
  // 見出し ※必須
  accordionTitle: string
  component?: ElementType
  variant?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | undefined
  accordionSubTitle?: string
  variantSubTitle?: 'subtitle1' | 'subtitle2' | 'caption' | 'overline'
  // アコーディオン開閉ステータス
  expanded?: boolean
  // Expanded用の型？↓
  // onChange?: (event: React.SyntheticEvent, isExpanded: boolean) => void
  onChange?: (_event: React.MouseEvent<HTMLElement, MouseEvent>) => void //汎用的なクリックイベント
  // 一意の値が必要であれば、id関連をこの値に兼用させる
  id?: string
  // 追加スタイリング
  AccordionSx?: SxProps
  AccordionSummarySx?: SxProps
  DetailsSx?: SxProps
  BorderNone?: boolean
  // コンテンツ
  children?: ReactNode
  disabled?: boolean
  // 右端オプション
  AdditionalProps?: JSX.Element
  // ヘルプアイコンとツールチップ
  TooltipTitleIconComponent?: ReactNode
  TooltipComponent?: ReactNode
}

// Stylings アコーディオン全体
const Item = styled(Paper)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  padding: 0,
}))

const AccordionStyle = styled((props: AccordionProps) => (
  <Accordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 10,
  marginBottom: 40,
  transition: '0ms',

  '&:before': {
    display: 'none',
  },

  // 重複border非表示
  '.MuiAccordionDetails-root': { border: 'none !important' },
}))

// Stylings アコーディオン見出し、トリガー部分
const AccordionSummaryStyle = styled((props: AccordionSummaryProps) => (
  <AccordionSummary {...props} />
))(({ theme }) => ({
  padding: '8px 16px',
  borderRadius: 10,
  marginBottom: -1,
  // TODO: DarkMode Color設定
  borderBottom:
    theme.palette.mode === 'dark'
      ? '1px solid rgba(255, 255, 255, 0.1)'
      : '1px solid rgba(0, 0, 0, 0.1)',

  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .01)'
      : 'rgba(0, 0, 0, .01)',
  '&.Mui-expanded': {
    borderRadius: '9px 9px 0 0',
  },
  transition: '.3s',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, .03)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}))

// Stylings アコーディオン内部、コンテンツ部分
const AccordionDetailsStyle = styled(AccordionDetails)(({ theme }) => ({
  padding: theme.spacing(3, 3, 4),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  borderRadius: '0 0 10px 10px',
}))

export const AccordionWrap = ({
  // 見出し
  accordionTitle,
  variant,
  component,
  accordionSubTitle,
  variantSubTitle,
  // アコーディオン開閉ステータス
  expanded,
  onChange,
  // 一意の値が必要であれば、id関連をこの値に兼用させる
  id,
  // Style
  AccordionSx,
  AccordionSummarySx,
  DetailsSx,
  BorderNone,
  // コンテンツ
  children,
  disabled,
  AdditionalProps,
  // ヘルプアイコンとツールチップ
  TooltipTitleIconComponent,
  TooltipComponent,
}: Props) => {
  // const theme = useTheme();
  return (
    <>
      <Item>
        <AccordionStyle
          expanded={expanded}
          onChange={onChange}
          sx={AccordionSx}
        >
          <AccordionSummaryStyle
            expandIcon={<ExpandMoreIcon />}
            aria-controls={id}
            id={id}
            disabled={disabled}
            sx={AccordionSummarySx}
            style={{
              border: BorderNone && 'none',
              background: BorderNone && 'none',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                width: '100%',
                pr: 5,
              }}
            >
              <Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'end',
                  }}
                >
                  <Typography
                    variant={variant ? variant : 'h3'}
                    component={component ? component : 'div'}
                  >
                    {accordionTitle}
                  </Typography>
                  {/* ツールチップ */}
                  <CustomTooltip
                    TooltipTitleIconComponent={TooltipTitleIconComponent}
                    TooltipComponent={TooltipComponent}
                  />
                </Box>

                <Box>
                  <Typography
                    variant={variantSubTitle ? variantSubTitle : 'subtitle2'}
                  >
                    {accordionSubTitle}
                  </Typography>
                </Box>
              </Box>
              <Box>{AdditionalProps}</Box>
            </Box>
          </AccordionSummaryStyle>
          <AccordionDetailsStyle
            sx={DetailsSx}
            style={{
              marginTop: BorderNone ? '-16px' : '',
            }}
          >
            {children}
          </AccordionDetailsStyle>
        </AccordionStyle>
      </Item>
    </>
  )
}
