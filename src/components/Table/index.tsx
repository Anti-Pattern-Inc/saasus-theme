import { Table } from '@mui/material'
import { ReactNode, TableHTMLAttributes } from 'react'

// type ElementProps = TableHTMLAttributes<HTMLTableElement>
/* Omitが無いとchildren内のTableCell要素の警告が出る？ */
type ElementProps = Omit<TableHTMLAttributes<HTMLTableElement>, keyof Props>

type Props = {
  children?: ReactNode
  ariaLabel?: string
}

export const CustomTable = ({ children, ...props }: Props & ElementProps) => {
  return (
    <>
      <Table stickyHeader {...props}>
        {children}
      </Table>
    </>
  )
}
