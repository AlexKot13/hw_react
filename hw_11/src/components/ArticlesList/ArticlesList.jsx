import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const ArticlesList = () => { 
  const navigate = useNavigate()
  const articles = [
    { id: 1, title: 'Статья 1' },
    { id: 2, title: 'Статья 2' },
    { id: 3, title: 'Статья 3' },
  ]

  const goToHomePage = () => {
    navigate('/') 
  }

  return (
    <div className='articles_list'>
      <h2>Список статей</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link to={`/articles/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={goToHomePage}>На главную</button>
    </div>
  )
}

export default ArticlesList