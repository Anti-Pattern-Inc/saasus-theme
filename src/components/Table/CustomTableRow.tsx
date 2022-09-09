// import { TableHTMLAttributes } from 'react'

type Props = {
  Columns?: JSX.Element
  // Columns?: TableHTMLAttributes<HTMLTableElement>
}

export const CustomTableRow = ({ Columns }: Props) => {
  return <>{Columns}</>
}
