import { connect } from "react-redux"
import { setUserInfo } from "../../redux/actions"
import { useState } from "react"

const UserForm = ({setUserInfo}) => {
  const [name, setName] = useState('')
  const [status, setStatus] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim() || !status.trim()) {
      setError('Пожалуйста, заполните все поля')
      return
    }
    setError('')

    setUserInfo(name, status)
    setName('')
    setStatus('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Обновить пользователя</h2>
      <input 
      type="text"
      placeholder="Имя"
      value={name}
      onChange={(e) => setName(e.target.value)} 
      />
      <input 
      type="text"
      placeholder="Статус"
      value={status}
      onChange={(e) => setStatus(e.target.value)}
      />
      <br />
      <button type="submit">Обновить</button>
      {error && <p className="error">{error}</p>}
    </form>
  )
}

export default connect(null, {setUserInfo})(UserForm)