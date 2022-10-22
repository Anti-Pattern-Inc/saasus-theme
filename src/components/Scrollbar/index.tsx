import { Box, useTheme } from '@mui/material'
import PropTypes from 'prop-types'
import { FC, ReactNode } from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2'

interface ScrollbarProps {
  children?: ReactNode
}

const Scrollbar: FC<ScrollbarProps> = ({ children, ...rest }) => {
  const theme = useTheme()

  return (
    <Scrollbars
      autoHide
      universal
      renderThumbVertical={() => {
        return (
          <Box
            sx={{
              width: 5,
              background: `${theme.colors.alpha.black[10]}`,
              borderRadius: `${theme.general.borderRadiusLg}`,
              transition: `${theme.transitions.create(['background'])}`,

              '&:hover': {
                background: `${theme.colors.alpha.black[30]}`,
              },
            }}
          />
        )
      }}
      {...rest}
    >
      {children}
    </Scrollbars>
  )
}

Scrollbar.propTypes = {
  children: PropTypes.node,
}

export default Scrollbar
