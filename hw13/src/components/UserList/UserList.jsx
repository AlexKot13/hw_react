import { connect } from 'react-redux';
import UserItem from '../UserItem/UserItem';
import style from './UserList.module.css'

const UserList = ({ users, filter }) => {
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div className={style.UserList}>
      {filteredUsers.length > 0 ? (
        filteredUsers.map(user => (
          <UserItem key={user.id} user={user} />
        ))
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
  filter: state.filter
});

export default connect(mapStateToProps)(UserList);