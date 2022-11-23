import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone'
import { Box, InputAdornment, TextField } from '@mui/material'

type Props = {
  onChange: (_event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  placeholder: string
  value: string
}

export const CustomTableFilter = ({ onChange, placeholder, value }: Props) => {
  return (
    <Box>
      <TextField
        sx={{
          mx: 0,
          my: 2,
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchTwoToneIcon />
            </InputAdornment>
          ),
        }}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        size="small"
        fullWidth
        margin="normal"
        variant="outlined"
      />
    </Box>
  )
}
