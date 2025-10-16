import { useCallback, useMemo, useState } from 'react'
import './App.css'
import { UserList } from './components/UserList'
import { FilterInput } from './components/FilterInput'
import { userList } from './components/data/users'

function App() {
  const [filter, setFilter] = useState('')

  const filterUsers = useCallback((filterText) => {
    return userList.filter(user =>
      user.name.toLowerCase().includes(filterText.toLowerCase())
    )
  }, [])

  const filteredUsers =useMemo(() => {
    return filterUsers(filter)
  }, [filter, filterUsers])

  return (
    <div className='container'>
      <h2>Список пользователей</h2>
      <FilterInput filter={filter} onFilterChange={setFilter}/>
      <UserList users={filteredUsers}/>
    </div>
  )
}

export default App
