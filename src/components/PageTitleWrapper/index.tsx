import { Box, styled } from '@mui/material'
import PropTypes from 'prop-types'
import { ReactNode } from 'react'

const PageTitle = styled(Box)(
  ({ theme }) => `
        padding: ${theme.spacing(4)};
`,
)

interface PageTitleWrapperProps {
  children?: ReactNode
}

const PageTitleWrapper = ({ children }: PageTitleWrapperProps) => {
  return <PageTitle className="MuiPageTitle-wrapper">{children}</PageTitle>
}

PageTitleWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageTitleWrapper
