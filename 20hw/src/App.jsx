import './App.css'
import { UserForm } from './components/UserForm'
import { UserList } from './features/users/UserList'

function App() {

  return (
    <div className='container'>
      <h1>Пользователи</h1>
      <UserForm />
      <UserList />
    </div>
  )
}

export default App
