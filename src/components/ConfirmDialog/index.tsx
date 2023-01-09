import CloseIcon from '@mui/icons-material/Close'
import WarningAmberIcon from '@mui/icons-material/WarningAmber'
import { Avatar, Box, Button, Dialog, styled, Typography } from '@mui/material'
import { ReactNode } from 'react'

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

const ButtonError = styled(Button)(
  ({ theme }) => `
    background: ${theme.colors.error.main};
    color: ${theme.palette.error.contrastText};

    &:hover {
      background: ${theme.colors.error.dark};
    }
  `,
)

type Props = {
  open: boolean
  onClose: () => void
  deleteButtons: { text: string; submit: () => void | Promise<void> }[]
  Text: ReactNode
  SubText?: ReactNode
  warning?: boolean
}

const ConfirmDialog = ({
  open,
  onClose,
  deleteButtons,
  SubText,
  Text,
  warning,
}: Props) => {
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
          <AvatarError>
            {warning ? <WarningAmberIcon /> : <CloseIcon />}
          </AvatarError>

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
              variant="text"
              size="large"
              sx={{
                mx: 1,
              }}
              onClick={onClose}
            >
              {'キャンセル'}
            </Button>
            {deleteButtons.map((deleteButton, i) => {
              return (
                <ButtonError
                  key={i}
                  data-testid="deleteTenantUserButton"
                  onClick={deleteButton.submit}
                  size="large"
                  sx={{
                    mx: 1,
                    px: 3,
                  }}
                  variant="contained"
                >
                  {deleteButton.text}
                </ButtonError>
              )
            })}
          </Box>
        </Box>
      </DialogWrapper>
    </>
  )
}

export default ConfirmDialog
