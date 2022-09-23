import { styled, TableHead, TableRow } from '@mui/material'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

// ----- テーブルの見出し折返し防止をグローバルに設置 -----
const StyledTableHead = styled(TableHead)(
  () => `
  &.MuiTableHead-root {
    >.MuiTableRow-head {
      >.MuiTableCell-head {
        white-space: nowrap;
      }
    }
  }
  `,
)

export const CustomTableHeader = ({ children, ...props }: Props) => {
  return (
    <StyledTableHead {...props}>
      <TableRow>{children}</TableRow>
    </StyledTableHead>
  )
}
