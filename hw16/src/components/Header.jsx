import React from 'react'
import { Box, AppBar, Toolbar, Typography  } from '@mui/material'

const Header = () => {
  return (
  <Box >
    <AppBar position='static'
    sx={{
      backgroundColor: '#b57edc',
      color: '#fff'
    }}
    >
      <Toolbar>
        <Typography variant='h6' sx={{flexGrow: 1}}>
          Приложение на Material UI
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Header
