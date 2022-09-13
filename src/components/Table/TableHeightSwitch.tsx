import { ChangeEvent } from 'react'
import { FormControlLabel, Switch } from '@mui/material'

type Props = {
  checked: boolean
  onChange: (_event: ChangeEvent<HTMLInputElement>, checked: boolean) => void
}

export const TableHeightSwitch = ({ checked, onChange }: Props) => {
  return (
    <>
      <FormControlLabel
        control={<Switch checked={checked} onChange={onChange} />}
        label="高さ変更"
        labelPlacement="end"
        sx={{
          display: 'flex',
          flexDirection: 'row-reverse',
          justifyContent: 'end',
          mb: 0.25,
          mr: 0,
        }}
      />
    </>
  )
}
