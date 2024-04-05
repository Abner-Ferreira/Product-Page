import React from 'react'
import logo from '../../assets/logo.png'
import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.container}>
      <nav className={styles.navContainer}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Corinthians Logo" className={styles.imgLogo}/>
        </div>
        <ul className={styles.menuList}>
          <li><a href="#" className={styles.menuCategory}>Home</a></li>
          <li><a href="#" className={styles.menuCategory} id={styles.active}>Product</a></li>
          <li><a href="#" className={styles.menuCategory}>About</a></li>
        </ul>
      </nav>
    </header>
  )
}
