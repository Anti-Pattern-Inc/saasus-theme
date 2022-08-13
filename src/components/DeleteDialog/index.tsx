import CloseIcon from '@mui/icons-material/Close'
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
  DeleteItem: ReactNode
  handleDeleteCompleted: () => Promise<void>
  closeDeleteDialog: () => void
}

const DeleteDialog = ({
  open,
  DeleteItem,
  handleDeleteCompleted,
  closeDeleteDialog,
}: Props) => {
  return (
    <DialogWrapper
      open={open}
      maxWidth="sm"
      fullWidth
      keepMounted
      onClose={closeDeleteDialog}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        p={5}
      >
        <AvatarError>
          <CloseIcon />
        </AvatarError>

        <Typography
          align="center"
          sx={{
            pt: 4,
          }}
          variant="h3"
        >
          {DeleteItem}
          <br />
          を削除します
        </Typography>

        <Typography
          align="center"
          sx={{
            py: 4,
          }}
        >
          一度削除すると元に戻せません
        </Typography>

        <Box>
          <Button
            variant="text"
            size="large"
            sx={{
              mx: 1,
            }}
            onClick={closeDeleteDialog}
            data-testid="cancel"
          >
            キャンセル
          </Button>
          <ButtonError
            onClick={handleDeleteCompleted}
            size="large"
            sx={{
              mx: 1,
              px: 3,
            }}
            variant="contained"
            data-testid="deleteButton"
          >
            削除
          </ButtonError>
        </Box>
      </Box>
    </DialogWrapper>
  )
}

export default DeleteDialog
