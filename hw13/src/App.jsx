import React from 'react'
import Filter from './components/Filter/Filter'
import UserList from './components/UserList/UserList'
import './App.css'

function App() {

  return (
   <div>
    <h1>Users List</h1>
    <Filter />
    <UserList />
   </div>
  )
}

export default App
