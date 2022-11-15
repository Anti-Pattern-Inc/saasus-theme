import { Button } from '@mui/material'
import { SxProps } from '@mui/system'
import React, { ReactNode } from 'react'

// Types
type Props = {
  children: ReactNode // 必須
  // Button Style = Partial
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning' // 初期値: primary
  size?: 'small' | 'medium' | 'large' // 初期値: medium
  variant?: 'contained' | 'outlined' | 'text' // 初期値: contained
  type?: 'submit' | 'reset' | 'button' // 初期値: Submit *Submitさせたくない時は'button'などを指定
  startIcon?: ReactNode // アイコン付きボタン
  endIcon?: ReactNode
  sx?: SxProps // カスタムスタイル
  disabled?: boolean // 初期値: false
  // Click Event
  onClick?: (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void //汎用的なクリックイベント
}

export const CustomButton = ({
  color,
  variant,
  size,
  type,
  startIcon,
  endIcon,
  disabled,
  onClick,
  sx,
  children,
}: Props) => {
  return (
    <Button
      color={color}
      size={size}
      variant={variant ? variant : 'contained'}
      type={type ? type : 'submit'}
      onClick={onClick}
      startIcon={startIcon}
      endIcon={endIcon}
      disabled={disabled}
      sx={sx}
    >
      {children}
    </Button>
  )
}
