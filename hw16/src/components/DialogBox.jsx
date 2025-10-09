import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle, Dialog, TextField } from '@mui/material'
import React, { useState } from 'react'

const DialogBox = ({ open, handleClose }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSave = () => {
    handleClose()
    setInputValue('')
  }
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle sx={{ color: '#b57edc' }}>Введите данные</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ color: '#530449ff', mb: 2 }}>
          Пожалуйста введите ваше сообщение
        </DialogContentText>

        <TextField 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        label='Ваше имя'
        type='text'
        fullWidth
        variant='outlined'
        autofocus 
        margine='dense'
        sx={{
            input: { color: '#2d2d2d' },
            label: { color: '#b57edc' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#b57edc' },
              '&:hover fieldset': { borderColor: '#a46ccf' },
              '&.Mui-focused fieldset': { borderColor: '#a46ccf' },
            },
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus
         sx={{
            color: '#a46ccf'
          }}>
          Отмена
        </Button>
        <Button onClick={handleSave} autoFocus variant='contained'
         sx={{
            backgroundColor: '#b57edc',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#a46ccf',
            },
          }}>
            Сохранить
         </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DialogBox
