import {AppRoutes} from './routes/AppRoutes'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <div className='container'>
      <Navbar />
      <AppRoutes />
    </div>  
    </BrowserRouter>
  )
}

export default App
