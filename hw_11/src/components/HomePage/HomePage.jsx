import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
     <div className='home_page'>
      <h1>Главная</h1>
      <ul>
        <li>
          <Link to="/">🏠 Главная</Link>
        </li>
        <li>
          <Link to="/articles">📝 Список статей</Link>
        </li>
      </ul>
    </div>
  )
}

export default HomePage
