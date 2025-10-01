import style from './UserItem.module.css'

const UserItem = ({user}) => {
  return (
    <div className={style.UserItem}>
      {user.name}
    </div>
  )
}

export default UserItem