import { createTheme } from '@mui/material'

const LightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#f7aef1ff',
      contrastText: '#6d596dff'
    },
    background: {
      default: '#f8dff4ff',
    }
  }
})

export default LightTheme
