import { useState } from "react";
import { useDispatch } from "react-redux";


export const UserForm = () => {
  const [name, setName] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    if (name.trim()) {
      dispatch(addUser({id: Data.now(), name}))
      setName('')
    }

    return (
      <form on onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Имя пользователя"
        value={name}
        onChange={e => setName(e.target.value)}
        />
        <button type="submit">Добавить</button>
      </form>
    )
  }
}
