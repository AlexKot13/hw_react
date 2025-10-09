import { Button, Typography, Container, Paper } from '@mui/material'
import React from 'react'

const MainContent = ({ handleClickOpen }) => {
  return (
    <Container sx={{ mt: 5 }}>
      <Paper sx={{ padding: 5 }} elevation={4}>
      <Typography gutterBottom sx={{ color: '#530449ff', mb: 2 }}>
        Добро пожаловать!
      </Typography>
      <Button variant='contained' onClick={handleClickOpen}
      sx={{ backgroundColor: '#b57edc', color: '#fff', '&:hover': { backgroundColor: '#a46ccf' } }}>
        Открыть диалог
      </Button>
      </Paper>
    </Container>
  )
}

export default MainContent
