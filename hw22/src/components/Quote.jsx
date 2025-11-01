import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchQuote } from '../redux/quoteSlice'
import styles from "./Quote.module.css"


export const Quote = () => {
  const dispatch =useDispatch()

  const {text, author, status, error} = useSelector((state) => state.quote)

  useEffect(() => {
    dispatch(fetchQuote())
  }, [dispatch])

  const handleNewQuote = () => {
    dispatch(fetchQuote())
  }

  return (
    <div className={styles.quoteContainer}>
      <h2 className={styles.title}>Random Quote</h2>

      {status === "loading" && <p className={styles.loading}>Loading</p>}
      {status === "failed" && <p className={styles.error}>Error: {error}</p>}
      {status === "succeeded" && (
        <>
        <blockquote className={styles.blockquote}>"{text}"</blockquote>
        <p className={styles.author}>{author}</p>
        </>
      )}

      <button onClick={handleNewQuote} className={styles.button}>New Quote</button>
    </div>
  )
}