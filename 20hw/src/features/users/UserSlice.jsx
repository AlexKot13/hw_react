import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  list: [
    {id:1, name: 'Jhon'},
    {id:2, name: 'Kate'},
    {id:3, name: 'Alex'},
    {id:4, name: 'Micheala'}
  ]
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.list.push(action.payload)
    },
    removeUser: (state, action) => {
      state.list = state.list.filter(user => user.id !== action.payload)
    }
  }
})

export const {addUser, removeUser} = userSlice.actions
export const userReducer = userSlice.reducer;