import Header from "./components/Header"
import DialogBox from "./components/DialogBox"
import MainContent from "./components/MainContent"
import { useState } from "react"
import './App.css'

function App() {

  const [open, setOpen] = useState(false)

  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div className="container">
    <Header />
    <MainContent handleClickOpen={handleClickOpen}/>
    <DialogBox open={open} handleClose={handleClose}/>
    </div>
  )
}

export default App
