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
import { ElementType, ReactNode, useState } from 'react'

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
}))

// Stylings アコーディオン見出し、トリガー部分
const AccordionSummaryStyle = styled((props: AccordionSummaryProps) => (
  <AccordionSummary {...props} />
))(({ theme }) => ({
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

type SetProps = {
  // 見出し ※必須
  AccordionTitle: string
  component?: ElementType
  variant?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  AccordionSubTitle?: string
  variantSubTitle?: 'subtitle1' | 'subtitle2' | 'caption' | 'overline'
  // アコーディオントリガー
  ExpandedName?: string
  id?: string
  // 読み込み時のオープンクローズ
  InitOpen?: string
  // 追加スタイリング
  AccordionSx?: SxProps
  SummarySx?: SxProps
  DetailsSx?: SxProps
  // コンテンツ
  children?: ReactNode
  disabled?: boolean
  // 右端オプション
  AdditionalProps?: JSX.Element
  // ヘルプアイコンとツールチップ
  TooltipTitleIconComponent?: ReactNode
  TooltipComponent?: ReactNode
}

const AccordionWrap = ({
  // 見出し
  AccordionTitle,
  variant,
  component,
  AccordionSubTitle,
  variantSubTitle,
  // アコーディオントリガー
  // id,
  ExpandedName, // 一意の値、id関連をこの値に兼用させる
  // 読み込み時のオープンクローズ
  InitOpen,
  // 追加スタイリング
  AccordionSx,
  SummarySx,
  DetailsSx,
  // コンテンツ
  children,
  AdditionalProps,
  disabled,
  // ヘルプアイコンとツールチップ
  TooltipTitleIconComponent,
  TooltipComponent,
}: SetProps) => {
  const [expanded, setExpanded] = useState<string | boolean>(`${InitOpen}`)

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }

  return (
    <>
      <Item>
        <AccordionStyle
          expanded={expanded === `${ExpandedName}`}
          onChange={handleChange(`${ExpandedName}`)}
          sx={AccordionSx}
        >
          <AccordionSummaryStyle
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${ExpandedName}-content`}
            id={`${ExpandedName}-content`}
            sx={SummarySx}
            disabled={disabled}
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
                    {AccordionTitle}
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
                    {AccordionSubTitle}
                  </Typography>
                </Box>
              </Box>
              <Box>{AdditionalProps}</Box>
            </Box>
          </AccordionSummaryStyle>
          <AccordionDetailsStyle sx={DetailsSx}>
            {children}
          </AccordionDetailsStyle>
        </AccordionStyle>
      </Item>
    </>
  )
}

export default AccordionWrap
