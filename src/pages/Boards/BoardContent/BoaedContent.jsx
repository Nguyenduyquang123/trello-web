
import Box from '@mui/material/Box'
import ListComlumns from './ListColumns/ListComlumns'
import { mapOrder } from '~/utils/sort'


function BoardContent({ board }) {
  const orderedColumns = mapOrder(board?.columns, board?.columnOrderIds, '_id')
  return (
    <Box sx={{
      backgroundColor:'primary.main',
      width:'100%',
      height:(theme) => theme.trello.boardContentHeight,
      p:'10px 0'
    }}>
      <ListComlumns columns={orderedColumns} />
    </Box>
  )
}

export default BoardContent

