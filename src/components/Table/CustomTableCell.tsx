import {
  styled,
  TableCell,
  tableCellClasses,
  TableCellProps,
} from '@mui/material'
import { ReactNode } from 'react'

type ElementProps = TableCellProps

type Props = {
  children: ReactNode
  minWidthValue?: number
  maxWidthValue?: number
  noWrap?: boolean
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

// デフォルトのTableCell
export const CustomTableCell = ({
  children,
  minWidthValue,
  maxWidthValue,
  noWrap,
  ...props
}: Props & ElementProps) => {
  return (
    <>
      <StyledTableCell
        {...props}
        sx={{
          whiteSpace: 'normal',
          top: 0,
          wordBreak: noWrap ? 'keep-all' : 'break-word',
          minWidth: minWidthValue ? minWidthValue : 60,
          maxWidth: maxWidthValue ? maxWidthValue : 240,
        }}
      >
        {children}
      </StyledTableCell>
    </>
  )
}
// 編集機能がある時のTableCell
const StyledTableCellAction = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    position: `sticky`,
    top: 0,
    right: 0,
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    position: `sticky`,
    top: 0,
    right: 0,
    borderColor: theme.colors.alpha.black[5],
  },
}))

// アクションがある場合は見出しのmapとは別に並列で設置する
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
