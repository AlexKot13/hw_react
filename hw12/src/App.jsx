import ValueDisplay from './components/ValueDisplay/ValueDisplay'
import './App.css'
import { useState } from 'react'


function App() {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }
  return (
    <div className='container'>
      <h1>Current and Previous Value</h1>
      <input type='text' value={inputValue} onChange={handleChange} placeholder='Some' />
      <ValueDisplay value={inputValue} />
    </div>
  )
}

export default App
