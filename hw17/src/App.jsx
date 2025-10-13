import { CssBaseline, Typography } from '@mui/material'
import { ThemeProvider } from '@mui/material'
import ThemeToggleButton from './components/ThemeToggleButton'
import LightTheme from './components/Themes/LightTheme'
import DarkTheme from './components/Themes/DarkTheme'
import { useState } from 'react'

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleThemeToggle = () => {
    setIsDarkMode((prev) => !prev)
  }

  const currentTheme = isDarkMode ? DarkTheme : LightTheme


  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <Typography variant='h4' gutterBottom>
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </Typography>

        <ThemeToggleButton onClick={handleThemeToggle} />
      </div>
    </ThemeProvider>
    )
}

export default App
