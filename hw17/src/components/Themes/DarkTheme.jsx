import { createTheme } from '@mui/material'

const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
     primary: {
      main: '#dd04ddff',
      contrastText: '#f5f1f1ff'
    },
    background: {
      default: '#643e57ff'   
    }
  }
})

export default DarkTheme
