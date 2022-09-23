import { Paper, TableContainer } from '@mui/material'
import { SxProps } from '@mui/system'
import { ReactNode, TableHTMLAttributes } from 'react'

type ElementProps = Omit<TableHTMLAttributes<HTMLTableElement>, keyof Props>
type Props = {
  children: ReactNode
  maxHeightValue?: number | string
  sx?: SxProps
}

export const CustomTableContainer = ({
  children,
  maxHeightValue,
  sx,
  ...props
}: Props & ElementProps) => {
  return (
    <TableContainer
      component={Paper}
      style={{ maxHeight: maxHeightValue }}
      sx={sx}
      {...props}
    >
      {children}
    </TableContainer>
  )
}
