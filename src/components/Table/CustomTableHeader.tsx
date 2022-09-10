// TableHeadTypeMap,
import {
  styled,
  // TableCell,
  // tableCellClasses,
  TableHead,
  TableRow,
} from '@mui/material'
import { ReactNode } from 'react'

// type ElementProps = Omit<TableHTMLAttributes<HTMLTableElement>, keyof Props>
// type ElementProps = OverridableComponent<TableHeadTypeMap>

type Props = {
  children: ReactNode
  // maxWidthValue?: number
  // wrap?: boolean
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

export const CustomTableHeader = ({
  children,
  // wrap,
  // maxWidthValue,
  ...props
}: Props) => {
  return (
    <>
      <StyledTableHead
        {...props}
        sx={[
          {
            paddingTop: '1.5em',
            paddingBottom: '1.5em',
            // maxWidth: maxWidthValue ? maxWidthValue : 120,
          },
        ]}
      >
        <TableRow>{children}</TableRow>
      </StyledTableHead>
    </>
  )
}
