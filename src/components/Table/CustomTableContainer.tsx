import { TableContainer, Paper } from '@mui/material'
import { ReactNode, TableHTMLAttributes } from 'react'

// type ElementProps = TableHTMLAttributes<HTMLTableElement>
type ElementProps = Omit<TableHTMLAttributes<HTMLTableElement>, keyof Props>

type Props = {
  children: ReactNode
  maxHeightValue?: number | string
}

export const CustomTableContainer = ({
  children,
  maxHeightValue,
  ...props
}: Props & ElementProps) => {
  return (
    <>
      <TableContainer
        component={Paper}
        style={{ maxHeight: maxHeightValue }}
        {...props}
      >
        {children}
      </TableContainer>
    </>
  )
}
