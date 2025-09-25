import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const ArticlePage = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const goBack = () => {
    navigate('/articles')
  }
  const goToHomePage = () => {
    navigate('/') 
  }

  return (
    <div className='article_page'>
      <h2>Статья {id}</h2>
      <p>Контент для статьи с ID: {id}</p>
      <button onClick={goBack}>Назад</button>
      <button onClick={goToHomePage}>Главная</button>
    </div>
  )
}

export default ArticlePage