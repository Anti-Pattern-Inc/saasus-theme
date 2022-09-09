import { Table, TableContainer, Paper } from '@mui/material'
import { ReactNode, TableHTMLAttributes } from 'react'

type Props = {
  fixedHead?: boolean
  children?: ReactNode
}
type ElementProps = Omit<TableHTMLAttributes<HTMLTableElement>, keyof Props>

export const CustomTable = ({ children, ...props }: Props & ElementProps) => {
  return (
    <>
      <TableContainer component={Paper} sx={{ maxHeight: 640 }}>
        <Table stickyHeader {...props}>
          {children}
        </Table>
      </TableContainer>
    </>
  )
}
