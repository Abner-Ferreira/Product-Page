import React from 'react'
import styles from './boxPrice.module.css'
import ChooseOption from '../ChooseOption/ChooseOption'

export default function BoxPrice() {
  return (
    <>
      <section className={styles.containerPrice}>
        <div className={styles.infos}>
          <h3>Corinthians Shirt</h3>
          <div className={styles.price}>
            <span>$150</span>
            <p>$250</p>
            <button>Available</button>
          </div>
          <div className={styles.desc}>
            <h5>Seassion 22/23</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quos reiciendis natus quis obcaecati dolor nam, inventore autem aperiam, iusto molestias facere soluta? Atque dolorum amet voluptatem asperiores qui voluptas.</p>
          </div>
          <ChooseOption />
        </div>
      </section>
    </>
  )
}
