// TableHeadTypeMap,
import { TableHead, TableRow } from '@mui/material'
import { ReactNode } from 'react'
// import { OverridableComponent } from '@mui/material/OverridableComponent'

// type ElementProps = Omit<TableHTMLAttributes<HTMLTableElement>, keyof Props>
// type ElementProps = OverridableComponent<TableHeadTypeMap>

type Props = {
  children: ReactNode
  wrap?: boolean
}

export const CustomTableHeader = ({ children, wrap, ...props }: Props) => {
  return (
    <>
      <TableHead
        {...props}
        sx={[
          {
            whiteSpace: 'nowrap',
            paddingTop: '1.5em',
            paddingBottom: '1.5em',
          },
          wrap && { whiteSpace: 'normal' },
        ]}
      >
        <TableRow>{children}</TableRow>
      </TableHead>
    </>
  )
}
