import { Stack, styled } from '@mui/material'
import { SxProps } from '@mui/system'
import { ReactNode } from 'react'

type Props = Partial<{
  mt: number // px指定
  mb: number // px指定
  justifyContent: 'center' | 'flex-end' | 'flex-start' // 左右位置 default: 右付け
  sx: SxProps
  children: ReactNode
}>

// {`theme.breakpoints.up('sm') matches: ${matches}`}

const StackButtonWrap = styled(Stack)(() => ({
  display: 'grid',
  gap: 8,
  gridTemplateColumns: 'repeat(auto-fit, minmax(min(160px, 100%), 1fr))',
  // テーマブレイクポイントのsm
  '@media (min-width: 600px)': {
    gap: 24,
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(160px, 100%), auto))',
  },
}))

export const ButtonWrap = ({
  mt = 32,
  mb = 16,
  sx,
  children,
  justifyContent,
}: Props) => {
  return (
    <StackButtonWrap
      justifyContent={justifyContent ? justifyContent : 'flex-start'}
      style={{
        marginTop: mt,
        marginBottom: mb,
      }}
      sx={sx}
    >
      {children}
    </StackButtonWrap>
  )
}
