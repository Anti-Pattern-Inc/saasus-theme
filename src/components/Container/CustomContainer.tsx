import { Box, Container, styled } from "@mui/material"
import { SxProps } from "@mui/system"
import { ReactNode } from "react"

/**
 * BreakPoint: setting from theme/schemes/SaaSusTheme.ts
 * values: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1840 }
 */

type Props = {
  children: ReactNode
  // Themeで設定した幅
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false
  // widthをブレイクポイントに追従
  fixed?: boolean
  sx?: SxProps
  // Side Pagging
  addGutter?: boolean
  // margin bottom
  mb?: number
}

// ----- extentd Container -----
const StyledContainer = styled(Container)(
  ({ theme }) => `
    padding: ${theme.spacing(0, 0, 0, 0)};
  `
)

export const CustomContainer = ({
  children,
  maxWidth,
  fixed,
  sx,
  addGutter,
  mb,
}: Props) => {
  return (
    <>
      <Box sx={{ mb: mb || 0 }}>
        <StyledContainer
          maxWidth={maxWidth}
          fixed={fixed}
          sx={sx}
          disableGutters={addGutter ? false : true}
        >
          {children}
        </StyledContainer>
      </Box>
    </>
  )
}
