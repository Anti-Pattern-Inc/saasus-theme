import { styled, TableRow } from '@mui/material'
import { ReactNode, TableHTMLAttributes } from 'react'

type ElementProps = Omit<TableHTMLAttributes<HTMLTableElement>, keyof Props>

type Props = {
  children?: ReactNode
}

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    background: theme.colors.alpha.black[10],
    '&:hover': {
      background: theme.colors.primary.lighter,
    },
  },
  '&:nth-of-type(even)': {
    background: theme.colors.alpha.black[5],
    '&:hover': {
      background: theme.colors.primary.lighter,
    },
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

export const CustomTableRow = ({ children }: Props & ElementProps) => {
  return <StyledTableRow>{children}</StyledTableRow>
}
