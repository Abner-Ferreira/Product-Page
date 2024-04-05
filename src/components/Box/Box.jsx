import React from 'react'
import styles from './box.module.css'
import Header from '../Header/Header'
import camisaPreta from '../../assets/camisaSCCP.png'
import camisaBranca from '../../assets/camisaSCCP-white.png'
import camisaBege from '../../assets/camisaSCCP-bege.png'
import BoxPrice from '../BoxPrice/BoxPrice'

export default function Box() {
  return (
    <>
      <div className={styles.container} id='headerID'>
        <Header />

        <div className={styles.imgDiv}>
          <img src={camisaPreta} alt="" id='black' style={{display: "block"}}/>
          <img src={camisaBranca} alt="" id='white' style={{display: "none"}}/>
          <img src={camisaBege} alt="" id='bege' style={{display: "none"}}/>
        </div>
        <div className={styles.nome}>
          <p>SCCP</p>
        </div>
        <BoxPrice />
      </div>
    </>
  )
}
