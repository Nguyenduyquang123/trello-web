



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
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#bdc3c7',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#16a085'
          }
        }
      }
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem'
        })
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem',
          '.MuiOutlinedInput-notchedOutline':{
            borderColor: theme.palette.primary.light
          },
          '&:hover': {
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.primary.main
            }
          },
          '& fieldset': {
            borderWidth: '1px !important'
          }
        })
      }
    }
    // ...other properties
  },
})
export default theme