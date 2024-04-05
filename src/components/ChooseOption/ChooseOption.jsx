import React, { useState } from 'react'
import styles from './choose.module.css'

export default function ChooseOption() {

  const [value, setValue] = useState(1)

  const add = () => {
      setValue(value + 1)
  }
  const minus = () => {
    if (value <= 1) {
      setValue(1)
    } else {
      setValue(value - 1)
    }
  }


  function changeImg(color){
    if(color === "black"){
      document.getElementById(color).style.display = "block";
      document.getElementById("white").style.display = "none";
      document.getElementById("bege").style.display = "none";
      document.getElementById("headerID").style.background = "linear-gradient(to right, #000 0%, #000 35%, #fff 35% , #fff 100%)";
    }else if (color === "white") {
      document.getElementById(color).style.display = "block";
      document.getElementById("black").style.display = "none";
      document.getElementById("bege").style.display = "none";
      document.getElementById("headerID").style.background = "linear-gradient(to right, #000 0%, #000 35%, #fff 35% , #fff 100%)";
    }else{
      document.getElementById(color).style.display = "block";
      document.getElementById("black").style.display = "none";
      document.getElementById("white").style.display = "none";
      document.getElementById("headerID").style.background = "linear-gradient(to right, #d0c9b7 0%, #d0c9b7 35%, #fff 35% , #fff 100%)";


    }
  }



  return (
    <>
      <section className={styles.container}>
        <div className={styles.colorContainer}>
          <span>Color</span>
          <div className={styles.colors}>
            <input type="radio" name="group" value={"black"} id={styles.black} onClick={ e => changeImg(e.target.value)}/>
            <input type="radio" name="group" value={"white"} id={styles.white} onClick={ e => changeImg(e.target.value)}/>
            <input type="radio" name="group" value={"bege"} id={styles.bege} onClick={ e => changeImg(e.target.value)}/>
          </div>
        </div>
        <div className={styles.sizes}>
          <span>Size</span>
          <select>
            <option value="sm">SM</option>
            <option value="md">MD</option>
            <option value="lg">LG</option>
            <option value="xl">XL</option>
          </select>
        </div>
        <div className={styles.quantity}>
          <span>Quantity</span>
          <div className={styles.qnttInfos}>
            <button onClick={minus}>-</button>
            <input type="number" value={value} disabled/>
            <button onClick={add}>+</button>

          </div>
        </div>
      </section>
    </>
  )
}
