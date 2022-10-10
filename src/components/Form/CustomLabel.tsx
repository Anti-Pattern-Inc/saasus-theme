import { Chip, InputLabel, styled } from '@mui/material'
import { CustomTooltip } from 'components/Tooltip/CustomTooltip'
import { ReactNode } from 'react'
import { SxProps } from '@mui/system'

// Types
type Props = {
  id?: string // TextFieldがIDを持つ場合、htmlFor同一のIDを設定する。アクセシビリティ的には推奨。UI的には必須ではない。
  TooltipTitleIconComponent?: ReactNode // ツールチップに表示するアイコンとセット。ツールチップ内にテキストかコンポーネントを設置可能。
  TooltipComponent?: ReactNode // トリガーをアイコンでなくテキストを設定する場合はtrue default: false
  children: ReactNode
  OptionalChip?: ReactNode
  chipLabel?: string
  size?: 'medium' | 'small'
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'
  variant?: 'filled' | 'outlined'
  sx?: SxProps
}

const Label = styled(InputLabel)(() => ({
  marginTop: 24,
  fontSize: '14px',
  position: 'initial',
  textAlign: 'left',
  transform: 'none',
  minHeight: '1.85em',

  '&.MuiFormLabel-root.MuiInputLabel-root': {
    fontSize: 14,
  },
}))

export const CustomLabel = ({
  id,
  TooltipTitleIconComponent,
  TooltipComponent,
  children,
  OptionalChip,
  chipLabel,
  color,
  size,
  sx,
  variant,
}: Props) => {
  return (
    <>
      <Label htmlFor={id}>
        {children}
        <CustomTooltip
          TooltipTitleIconComponent={TooltipTitleIconComponent}
          TooltipComponent={TooltipComponent}
        />
        {OptionalChip && (
          <Chip
            size={size ? size : 'small'}
            color={color}
            variant={variant}
            label={chipLabel ? chipLabel : '任意'}
            sx={sx}
            style={{
              borderRadius: 4,
              margin: `0px 4px 4px`,
              padding: `1px 8px 0`,
            }}
          />
        )}
      </Label>
    </>
  )
}
