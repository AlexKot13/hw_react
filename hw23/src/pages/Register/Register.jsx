import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { register } from "../../store/authSlice"

export const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {message, isError} = useSelector((state) => state.auth)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = () => {
    dispatch(register({email, password}))
    if (!isError) navigate('/login')

    const users = JSON.parse(localStorage.getItem('user')) || []
    const newUser = users[users.length - 1]

    localStorage.setItem('currentUser', JSON.stringify(newUser))

    navigate('/profile')
  }
  return (
    <div>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Зарегистрироваться</button>
      {message && <p style={{ color: isError ? 'red' : 'green' }}>{message}</p>}
    </div>
  )
}
