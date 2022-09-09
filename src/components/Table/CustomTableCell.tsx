import { TableCell } from '@mui/material'
import { ReactNode } from 'react'

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }))

type Props = {
  children?: ReactNode
}

export const CustomTableCell = ({ children }: Props) => {
  return <TableCell>{children}</TableCell>
}
