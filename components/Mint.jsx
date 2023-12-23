import React from 'react'
import Image from 'next/image'
import Card from 'public/card.jpg'
import styles from 'styles/mint.module.css'
const Mint = () => {
  return (
    <div className={styles.container}>
      <Image src={Card} className={styles.card} />
      <button className={styles.button}>
        Mint
      </button>
    </div>
  )
}

export default Mint