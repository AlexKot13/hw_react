import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {logout} from '../../store/authSlice'

export const Profile = () => {
  const dispatch =useDispatch()
  const navigate = useNavigate()
  const {currentUser} = useSelector((state) => state.auth)

  const handleLogout = () => {
    dispatch(logout())
    navigate('/login')
  }
  return (
    <div>
      <h1>Профиль</h1>
      {currentUser && <p>Привет, {currentUser.email}</p>}
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
