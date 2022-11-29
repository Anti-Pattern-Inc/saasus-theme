import { Box, TableBody } from '@mui/material'
import { CustomTableCell } from './CustomTableCell'
import { CustomTableRow } from './CustomTableRow'

type Props = {
  text?: string
}

export const CustomTableFilterResult = ({ text }: Props) => {
  return (
    <TableBody>
      <CustomTableRow>
        {/* または {mockDatas.length} などでセルの結合。現状は多めに結合しておく */}
        <CustomTableCell colSpan={100}>
          <Box
            sx={{
              p: 4,
              whiteSpace: 'nowrap',
              textAlign: 'center',
              fontSize: 24,
            }}
          >
            <b>{text || '検索結果はありませんでした'}</b>
          </Box>
        </CustomTableCell>
      </CustomTableRow>
    </TableBody>
  )
}
