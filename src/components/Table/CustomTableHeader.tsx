// TableHeadTypeMap,
import { TableHead, TableRow } from '@mui/material'
// import { OverridableComponent } from '@mui/material/OverridableComponent'
import { ReactNode } from 'react'

// type ElementProps = Omit<TableHTMLAttributes<HTMLTableElement>, keyof Props>
// type ElementProps = OverridableComponent<TableHeadTypeMap>

type Props = {
  children: ReactNode
}

export const CustomTableHeader = ({ children, ...props }: Props) => {
  return (
    <>
      <TableHead {...props}>
        <TableRow>{children}</TableRow>
      </TableHead>
    </>
  )
}
