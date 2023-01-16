import CloseIcon from '@mui/icons-material/Close'
import WarningAmberIcon from '@mui/icons-material/WarningAmber'
import { Avatar, Box, Button, Dialog, styled, Typography } from '@mui/material'
import i18n, { i18nNamespace } from 'i18n'
import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

const DialogWrapper = styled(Dialog)(
  () => `
    .MuiDialog-paper {
      overflow: visible;
    }
  `,
)

const AvatarError = styled(Avatar)(
  ({ theme }) => `
    background-color: ${theme.colors.error.lighter};
    color: ${theme.colors.error.main};
    width: ${theme.spacing(12)};
    height: ${theme.spacing(12)};

    .MuiSvgIcon-root {
      font-size: ${theme.typography.pxToRem(45)};
    }
  `,
)

const AvatarWarning = styled(Avatar)(
  ({ theme }) => `
    background-color: ${theme.colors.warning.lighter};
    color: ${theme.colors.warning.main};
    width: ${theme.spacing(12)};
    height: ${theme.spacing(12)};

    .MuiSvgIcon-root {
      font-size: ${theme.typography.pxToRem(45)};
    }
  `,
)

type Props = {
  open: boolean
  onClose: () => void
  buttons: { text: string; submit: () => void | Promise<void> }[]
  Text: ReactNode
  SubText?: ReactNode
  color: 'error' | 'warning'
}

const ConfirmDialog = ({
  open,
  onClose,
  buttons,
  SubText,
  Text,
  color,
}: Props) => {
  const { t } = useTranslation(i18nNamespace, { i18n })

  return (
    <>
      <DialogWrapper
        open={open}
        maxWidth="sm"
        fullWidth
        keepMounted
        disableEscapeKeyDown
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          p={4}
        >
          {
            {
              error: (
                <AvatarError>
                  <CloseIcon />
                </AvatarError>
              ),
              warning: (
                <AvatarWarning>
                  <WarningAmberIcon />
                </AvatarWarning>
              ),
            }[color]
          }

          <Typography
            align="center"
            sx={{
              py: 4,
              px: 6,
            }}
            variant="h3"
          >
            {Text}
          </Typography>

          {SubText && (
            <Typography
              align="center"
              sx={{
                pb: 4,
                px: 4,
              }}
              variant="subtitle1"
            >
              {SubText}
            </Typography>
          )}

          <Box>
            <Button
              data-testid="cancel"
              variant="outlined"
              size="large"
              sx={{
                mx: 1,
              }}
              onClick={onClose}
              color={color}
            >
              {t('cancel')}
            </Button>
            {buttons.map((deleteButton, i) => {
              return (
                <Button
                  key={i}
                  data-testid={`button-${deleteButton.text}`}
                  onClick={deleteButton.submit}
                  size="large"
                  sx={{
                    mx: 1,
                    px: 3,
                  }}
                  color={color}
                  variant="contained"
                >
                  {deleteButton.text}
                </Button>
              )
            })}
          </Box>
        </Box>
      </DialogWrapper>
    </>
  )
}

export default ConfirmDialog
