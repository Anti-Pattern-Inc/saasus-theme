import {
  styled,
  TableCell,
  tableCellClasses,
  TableCellProps,
} from '@mui/material'
import { ReactNode } from 'react'

// type ElementProps = TableHTMLAttributes<HTMLTableElement>
// function TableCell(props: TableCellProps): JSX.Element
type ElementProps = TableCellProps

type Props = {
  children: ReactNode
  minWidthValue?: number
}

// ----- Design -----
// INFO: https://mui.com/material-ui/react-table/#basic-table

// ----- Cell BasicStyle -----
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    borderColor: theme.colors.alpha.black[5],
  },
}))

export const CustomTableCell = ({
  children,
  minWidthValue,
  ...props
}: Props & ElementProps) => {
  return (
    <>
      {/* <StyledTableCell {...props}>{children}</StyledTableCell> */}
      <StyledTableCell
        {...props}
        sx={{ top: 0, minWidth: minWidthValue ? minWidthValue : 80 }}
      >
        {children}
      </StyledTableCell>
    </>
  )
}

// ----- Action for Edit/Remove Other-----
const StyledTableCellAction = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    position: `sticky`,
    // top:0,
    right: 0,
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    position: `sticky`,
    top: -12,
    right: 0,
    borderColor: theme.colors.alpha.black[5],
  },
}))

export const CustomTableCellAction = ({
  children,
  ...props
}: Props & ElementProps) => {
  return (
    <>
      <StyledTableCellAction align="center" sx={{ top: 0 }} {...props}>
        {children}
      </StyledTableCellAction>
    </>
  )
}
