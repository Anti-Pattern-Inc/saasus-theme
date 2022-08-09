import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import { Box, Button, Tooltip } from '@mui/material'
import { ReactNode } from 'react'

// Types
type Props = {
  TooltipTitleIconComponent?: ReactNode // ツールチップに表示するアイコンとセット。ツールチップ内にテキストかコンポーネントを設置可能。
  TooltipComponent?: ReactNode // デフォルトのアイコン以外のTooltipを設置する時
}

export const CustomTooltip = ({
  TooltipTitleIconComponent,
  TooltipComponent,
}: Props) => {
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
