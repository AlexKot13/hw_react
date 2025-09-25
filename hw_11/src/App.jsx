import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import HomePage from './components/HomePage/HomePage.jsx'
import ArticlesList from './components/ArticlesList/ArticlesList.jsx'
import ArticlePage from './components/ArticlePage/ArticlePage.jsx'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/articles/:id" element={<ArticlePage />} />
      </Routes>
    </div>
  )
}

export default App
