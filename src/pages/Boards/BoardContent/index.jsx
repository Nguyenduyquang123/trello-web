import React from 'react'
import Box from '@mui/material/Box'


function BoardContent() {
  return (
    <Box sx={{
      backgroundColor:'primary.main',
      width:'100%',
      height:(theme) => `calc(100vh - ${theme.trello.appbarHeight} - ${theme.trello.boardbarHeight} )`,
      display:'flex',
      alignItems:'center',
      bgcolor: (theme) => ( theme.palette.mode === 'dark' ? '#34495e' : '#1976d2' )
    }}>
      board contenci
    </Box>
  )
}

export default BoardContent

