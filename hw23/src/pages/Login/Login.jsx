import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../store/authSlice'

export const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { message, isError, currentUser } = useSelector(state => state.auth)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    dispatch(login({ email, password }))
    setEmail('')
    setPassword('')
  }

  useEffect(() => {
    if (currentUser) {
      navigate('/profile')
    }
  }, [currentUser, navigate])

  return (
    <div>
      <input type='email' placeholder='email' value={email} onChange={e => setEmail(e.target.value)} />
      <br />
      <input type='password' placeholder='password' value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Войти</button>
      {message && <p style={{ color: isError ? 'red' : 'green' }}>{message}</p>}
    </div>
  )
}