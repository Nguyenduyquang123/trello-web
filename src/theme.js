
import { teal, cyan, deepOrange, orange } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const theme = extendTheme({
  trello:{
    appbarHeight:'58px',
    boardbarHeight:'60px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary : deepOrange
      }
    },
    dark: {
      palette: {
        primary: cyan,
        secondary : orange
      }
    }
  }
  // ...other properties
})
export default theme