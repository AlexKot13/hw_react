import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.headerWrapper}>
        <h1 className={styles.title} >Сникерс - магазин</h1>
        <nav className={styles.navigation}>
            <NavLink className={styles.navLink}>главная </NavLink>
              <NavLink className={styles.navLink}>корзина</NavLink>
            <NavLink className={styles.navLink}>новости</NavLink>
        </nav>
        </div>
  
    </header>
  )
}

export default Header