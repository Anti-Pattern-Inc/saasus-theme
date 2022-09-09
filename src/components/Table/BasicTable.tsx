import {
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { CustomTableRow, CustomTableCell } from '@anti-pattern-inc/saasus-theme'

// ----- Design -----
// INFO: https://mui.com/material-ui/react-table/#basic-table
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

interface Column {
  id: 'name' | 'info' | 'mail' | 'density' | 'dateString'
  label: string
  minWidth?: number
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit'
  wrap?: boolean // TODO
  format?: (value: number) => string
}

// Common minWidth
const CommonMinWidth = 120

const columns: Column[] = [
  { id: 'name', label: 'テナント名', minWidth: 200 },
  { id: 'info', label: '会社説明', minWidth: 180 },
  {
    id: 'mail',
    label: 'Email',
    minWidth: CommonMinWidth,
    // align: 'left',
  },
  {
    id: 'dateString',
    label: '加入日',
    minWidth: CommonMinWidth,
  },
  {
    id: 'density',
    label: '優勝経験',
    minWidth: CommonMinWidth,
  },
]

function createData(
  name: string,
  company: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, company, calories, fat, carbs, protein }
}

const rows = [
  createData('Frozen yoghurt', '会社説明データ', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', '会社説明データ', 237, 9.0, 37, 4.3),
  createData('Eclair', '会社説明データ', 262, 16.0, 24, 6.0),
  createData('Cupcake', '会社説明データ', 305, 3.7, 67, 4.3),
  createData('Gingerbread', '会社説明データ', 356, 16.0, 49, 3.9),
]

export const BasicTable = () => {
  return (
    <>
      {/* TODO: common maxHeight = SaaSusTheme設定？ */}
      <TableContainer component={Paper} sx={{ maxHeight: 640 }}>
        <Table stickyHeader aria-label="table name">
          <TableHead>
            <CustomTableRow
              Columns={
                <>
                  {columns.map((column) => (
                    <StyledTableCell
                      key={column.id}
                      align={column.align ? column.align : 'left'}
                      style={{ top: 0, minWidth: column.minWidth }}
                    >
                      {column.label}
                    </StyledTableCell>
                  ))}
                  {/* <StyledTableCell
                    align="left"
                    style={{ top: 0, minWidth: CommonMinWidth }}
                  >
                    アクション
                  </StyledTableCell> */}
                  <CustomTableCell>アクション</CustomTableCell>
                </>
              }
            />
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.company}</TableCell>
                <TableCell align="left">{row.calories}</TableCell>
                <TableCell align="left">{row.fat}</TableCell>
                <TableCell align="left">{row.carbs}</TableCell>
                <TableCell align="center">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
