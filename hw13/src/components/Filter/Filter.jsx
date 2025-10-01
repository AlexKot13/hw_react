import { setFilter } from "../../redux/actions"
import { connect } from 'react-redux';
import style from './Filter.module.css'

const Filter = ({ filter, setFilter }) => {
  return (
    <div className={style.userList}>
      <input 
      type="text"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      placeholder="User search"/>
    </div>
  )
}

const mapStateToProps = (state) => ({
  filter: state.filter
})

export default connect(mapStateToProps, {setFilter})(Filter)