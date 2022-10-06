import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone'
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone'

import {
  IconButton,
  styled,
  TableCell,
  tableCellClasses,
  TableCellProps,
  Tooltip,
  Typography,
} from '@mui/material'

type ElementProps = TableCellProps

type Props = Partial<{
  onClickEdit: (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  onClickDelete: (
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void
  hasEdit: boolean
  editTitle: string
  hasDelete: boolean
  deleteTitle: string
  testItem: string
}>

// ----- Action Header for Edit/Remove Other-----
const StyledTableCellAction = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    position: `sticky`,
    top: 0,
    right: 0,
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    position: `sticky`,
    top: -49,
    right: 0,
    borderColor: theme.colors.alpha.black[5],
  },
}))

// ----- Action Cell for Edit/Remove Other -----
const IconButtonUI = styled(IconButton)(
  ({ theme }) => `
  &.MuiButtonBase-root {
    &.MuiIconButton-root {
      background: ${theme.colors.alpha.white[70]};
      margin: ${theme.spacing(0, 0.5)};
    }
  `,
)

export const CustomTableCellActionBody = ({
  hasEdit,
  editTitle,
  hasDelete,
  deleteTitle,
  onClickEdit,
  onClickDelete,
  testItem,
  ...props
}: Props & ElementProps) => {
  return (
    <StyledTableCellAction align="center" sx={{ top: 0 }} {...props}>
      <Typography noWrap>
        {hasEdit && (
          <Tooltip title={editTitle} arrow>
            <IconButtonUI onClick={onClickEdit} color="primary">
              <EditTwoToneIcon
                fontSize="small"
                data-testid={testItem && `updating:${testItem}`}
              />
            </IconButtonUI>
          </Tooltip>
        )}
        {hasDelete && (
          <Tooltip title={deleteTitle} arrow>
            <IconButtonUI onClick={onClickDelete} color="error">
              <DeleteTwoToneIcon
                fontSize="small"
                data-testid={testItem && `deleting:${testItem}`}
              />
            </IconButtonUI>
          </Tooltip>
        )}
      </Typography>
    </StyledTableCellAction>
  )
}
