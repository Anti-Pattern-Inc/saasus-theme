import { Table, TableContainer, Paper } from '@mui/material'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const CustomTableContainer = ({ children }: Props) => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 640 }}>
      <Table stickyHeader aria-label="table name">
        {/* TableHead + TableBody */}
        {children}
      </Table>
    </TableContainer>
  )
}
