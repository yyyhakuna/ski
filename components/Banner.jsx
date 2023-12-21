import React from 'react'
import styles from 'styles/banner.module.css'
const Banner = () => {
  const connect = async () => {
    if (typeof window.unisat !== 'undefined') {
      console.log('UniSat Wallet is installed!');
    }
    try {
      let accounts = await window.unisat.requestAccounts();
      console.log('connect success', accounts);
    } catch (e) {
      console.log('connect failed');
    }
  }
  return (
    <div>
      <button className={styles.button} style={{ margin: '0 10%' }}>MUSEUM</button>
      <button className={styles.button} style={{ margin: '0 35%' }}>MUSEUM</button>
      <button className={styles.button} style={{ margin: '0 60%' }}>MUSEUM</button>
      <button className={styles.connectBtn} style={{ margin: '5% 80%' }} onClick={connect}>
        <svg viewBox="0 0 24 24" className={styles.arr_2} xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
          ></path>
        </svg>
        <span className={styles.text}>Connect</span>
        <span className={styles.circle}></span>
        <svg viewBox="0 0 24 24" className={styles.arr_1} xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
          ></path>
        </svg>
      </button>
      <video src='sp.mp4' autoPlay muted loop style={{ pointerEvents: 'none', width: '100%', height: 'auto' }} />

    </div>
  )
}

export default Banner