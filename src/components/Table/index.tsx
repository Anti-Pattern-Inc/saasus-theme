import { Table } from '@mui/material'
import { ReactNode, TableHTMLAttributes } from 'react'

type ElementProps = TableHTMLAttributes<HTMLTableElement>

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
