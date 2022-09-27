import { Box, Container, styled } from "@mui/material"
import { SxProps } from "@mui/system"
import { ReactNode } from "react"

/**
 * BreakPoint: setting from theme/schemes/SaaSusTheme.ts
 * values: { xs: 0, sm: 480, md: 768, lg: 1024, xl: 1440 }
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
