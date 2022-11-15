import { Box, Container, styled } from '@mui/material'
import { CSSProperties } from '@mui/styles'
import { SxProps } from '@mui/system'
import { ReactNode } from 'react'

/**
 * BreakPoint: setting from theme/schemes/SaaSusTheme.ts
 * values: { xs: 0, sm: 480, md: 768, lg: 1024, xl: 1440 }
 */

type Props = {
  children: ReactNode
  // Themeで設定した幅
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false
  // widthをブレイクポイントに追従
  fixed?: boolean
  // Side Pagging
  addGutter?: boolean
  // margin bottom
  mb?: number | string
  sx?: SxProps
  style?: CSSProperties
}

// ----- extend Container -----
const StyledContainer = styled(Container)(
  ({ theme }) => `
    padding: ${theme.spacing(0, 0, 0, 0)};
  `,
)

export const CustomContainer = ({
  children,
  maxWidth,
  fixed,
  sx,
  addGutter,
  mb,
  style,
}: Props) => {
  return (
    // margin-bottom or デフォルトmargin-bottom
    <Box sx={{ mb: mb || 4 }}>
      <StyledContainer
        maxWidth={maxWidth}
        sx={sx}
        style={style}
        // 段階的な横幅指定
        fixed={fixed}
        // 両横の溝=paddingの有無 defaultは無しに指定
        disableGutters={addGutter ? false : true}
      >
        {children}
      </StyledContainer>
    </Box>
  )
}
