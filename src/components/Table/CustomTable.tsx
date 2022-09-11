import { Table } from '@mui/material'
import { ReactNode, TableHTMLAttributes } from 'react'

// type ElementProps = TableHTMLAttributes<HTMLTableElement>
/* Omitが無いとchildren内のTableCell要素の警告が出る？ */
type ElementProps = Omit<TableHTMLAttributes<HTMLTableElement>, keyof Props>

/**
 * @caption: テーブルフッター（左下）に付与する説明文のオプション
 */
type Props = {
  children?: ReactNode
  ariaLabel?: string
  caption?: string
}

export const CustomTable = ({
  children,
  caption,
  ...props
}: Props & ElementProps) => {
  return (
    <>
      <Table stickyHeader {...props}>
        {caption && <caption>{caption}</caption>}
        {children}
      </Table>
    </>
  )
}
