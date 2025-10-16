import styles from './CatImage.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'


const CatImage = () => {
  const [imageUrl, setImageUrl] = useState('')
  const [loading, setLoading] = useState(false)

  const fetchCatImage = async () => {
    setLoading(true)
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search')
      setImageUrl(response.data[0].url)
    } catch (error) {
      console.error('Ошибка при загрузки котика', error)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchCatImage()
  }, [])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>* Случайный котик *</h1>
      {loading ? <p>Загрузка...</p> : <img src={imageUrl} alt='Котик' className={styles.image} />}
      <button className={styles.button} onClick={fetchCatImage}>
        Показать другого
      </button>
    </div>
  )
}

export default CatImage
