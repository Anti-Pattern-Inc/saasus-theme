import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import { Box, Button, Tooltip } from '@mui/material'
import i18n, { i18nNamespace } from 'i18n'
import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

// Types
type Props = {
  TooltipTitleIconComponent?: ReactNode // ツールチップに表示するアイコンとセット。ツールチップ内にテキストかコンポーネントを設置可能。
  TooltipComponent?: ReactNode // デフォルトのアイコン以外のTooltipを設置する時
}

export const CustomTooltip = ({
  TooltipTitleIconComponent,
  TooltipComponent,
}: Props) => {
  const { t } = useTranslation(i18nNamespace, { i18n })
  // TooltipComponentが定義されていない場合、
  // スクリーンリーダーにButtonと読まれてしまうのでaria-labelを設定
  const toolTipAriaLabel = TooltipComponent ? undefined : t('help')

  return (
    <>
      {TooltipTitleIconComponent && (
        <Tooltip
          title={
            <Box sx={{ textAlign: 'justify' }}>{TooltipTitleIconComponent}</Box>
          }
          arrow
          placement="top-start"
        >
          <Button
            sx={{
              margin: '0 0 .2em 0',
              '&.MuiButton-root': {
                margin: '0 2px 2px',
                minWidth: 'fit-content',
                padding: '3px 6px 3px',
                borderRadius: '6px',
              },
            }}
            aria-label={toolTipAriaLabel}
          >
            {TooltipComponent ? (
              TooltipComponent
            ) : (
              <HelpOutlineIcon fontSize="small" />
            )}
          </Button>
        </Tooltip>
      )}
    </>
  )
}
