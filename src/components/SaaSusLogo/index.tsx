import { Box, styled } from '@mui/material'
import Link from 'next/link'

type LogoProps = {
  width: number
  alt: string
}

const LogoBox = styled(Box)(
  () => `
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
`,
)

export const SaaSusLogo = ({ width, alt }: LogoProps) => {
  return (
    <LogoBox>
      <Link href="/">
        <img
          width={width}
          src="/static/images/logo/saasus_logo.svg"
          alt={alt}
        />
      </Link>
    </LogoBox>
  )
}
