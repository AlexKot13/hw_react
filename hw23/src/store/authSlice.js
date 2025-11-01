import { createSlice } from '@reduxjs/toolkit'


const getUsersFromLocalStorage = () => {
  const users = localStorage.getItem('users')
  return users ? JSON.parse(users) : []
}

const getCurrentUserFromLocalStorage = () => {
  const currentUser = localStorage.getItem('currentUser')
  return currentUser ? JSON.parse(currentUser) : null
}

const initialState = {
  users: getUsersFromLocalStorage(),
  currentUser: getCurrentUserFromLocalStorage(),
  isError: false,
  isSucces: false,
  message: ''
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload
      const user = state.users.find((u) => u.email === email)

      if (!user) {
        state.isError = true
        state.message = 'Такого пользователя не существует'
        state.isSucces = false
        return
      }

      if (user.password !== password) {
        state.isError = true
        state.message = 'Неверный пароль'
        state.isSucces = false
        return
      }

      state.currentUser = user
      localStorage.setItem('currentUser', JSON.stringify(user))
      state.isError = false
      state.isSucces = true
      state.message = 'Вход выполнен успешно'
    },

    register: (state, action) => {
      const { email, password } = action.payload
      const isUserExist = state.users.find((u) => u.email === email)

      if (isUserExist) {
        state.isError = true
        state.message = 'Пользователь с таким email уже существует'
        state.isSucces = false
        return
      }

      const newUser = { email, password }
      state.users.push(newUser)
      localStorage.setItem('users', JSON.stringify(state.users))
      state.isSucces = true
      state.isError = false
      state.message = 'Регистрация прошла успешно'
    },

    logout: (state) => {
      state.currentUser = null
      localStorage.removeItem('currentUser')
      state.isError = false
      state.isSucces = true
      state.message = 'Вы вышли из системы'
    }
  }
})

export const { login, logout, register } = authSlice.actions
export default authSlice.reducer