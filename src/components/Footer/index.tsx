import { Box, Card, styled, Typography } from '@mui/material'
import Link from 'components/Link'
import { useTranslation } from 'next-export-i18n'

const FooterWrapper = styled(Card)(
  ({ theme }) => `
        border-radius: 0;
        margin-top: ${theme.spacing(4)};
`,
)

function Footer() {
  const { t } = useTranslation()
  return (
    <FooterWrapper className="footer-wrapper">
      <Box
        p={4}
        display={{ xs: 'block', md: 'flex' }}
        alignItems="center"
        textAlign={{ xs: 'center', md: 'left' }}
        justifyContent="space-between"
      >
        <Box>
          <Typography variant="subtitle1">
            &copy; 2022 Anti-Pattern Inc.
          </Typography>
        </Box>
        <Typography
          sx={{
            pt: { xs: 2, md: 0 },
          }}
          variant="subtitle1"
        >
          {t('feedback')}{' '}
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSdh4CXgzABUQ_J8kDi3PafB3E6r898SuiQonVfOwVSarHAXug/viewform?usp=sf_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('feedback link')}
          </Link>
        </Typography>
      </Box>
    </FooterWrapper>
  )
}

export default Footer
