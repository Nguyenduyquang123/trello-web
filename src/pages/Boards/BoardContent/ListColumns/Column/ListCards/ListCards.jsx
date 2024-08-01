
import Card from './Card/Card'
import Box from '@mui/material/Box'


function ListCards( {cards} ) {
  return (
    <Box sx={{
      m:'0px 5px',
      p:'0px 5px',
      display:'flex',
      flexDirection:'column',
      gap:1,
      overflowX:'hidden',
      overflowY:'auto',
      maxHeight: (theme) => `calc( ${theme.trello.boardContentHeight} - ${ theme.spacing(5) } - ${theme.trello.columnFooterHeight} - ${theme.trello.columnHeaderHeight} )`,
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#ced0da'
      },
      '&::-webkit-scrollbar-thumb:hover': {
        backgroundColor: '#bfc2cf'
      }
    }}>
      {/*card */}
      {cards?.map(card => (<Card key={cards?._id} card={card} />))}

    </Box>
  )
}

export default ListCards