import { ChangeEvent } from 'react'
import { FormControlLabel, Switch } from '@mui/material'
import { SxProps } from '@mui/system'

type Props = {
  checked: boolean
  onChange: (_event: ChangeEvent<HTMLInputElement>, checked: boolean) => void
  sxStyle?: SxProps
  label?: string
}

export const TableHeightSwitch = ({
  checked,
  onChange,
  sxStyle,
  label,
  ...props
}: Props) => {
  return (
    <FormControlLabel
      control={<Switch checked={checked} onChange={onChange} />}
      label={label}
      labelPlacement="end"
      sx={sxStyle}
      style={{
        display: 'flex',
        flexDirection: 'column-reverse',
        justifyContent: 'end',
        margin: '0 8px -8px 0',
      }}
      {...props}
    />
  )
}
