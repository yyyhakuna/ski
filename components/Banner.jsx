import React, { useState } from 'react'
import styles from 'styles/banner.module.css'
import {message} from 'antd'
const Banner = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [adr , setAdr] = useState(null)
  const setState = async()=>{
    const address = await window.unisat?.getAccounts()
    setAdr(address[0])
  }
  setState()
  const connect = async () => {
    console.log(adr);
    if(adr){
      return
    }9
    if (typeof window.unisat === 'undefined') {
      messageApi.open({
        type: 'error',
        content: 'This is an error message',
      });
    }
    try {
      let accounts = await window.unisat.requestAccounts();
      setAdr(accounts[0])
    } catch (e) {
      console.log('connect failed');
    }
  }

  const formatAddress= (address)=>{
    return `${address.substring(0,4)}...${address.substring(address.length-4)}`
  }
  return (
    <div>
      {contextHolder}
      <button className={styles.button} style={{ margin: '0 3%' }}>MUSEUM</button>
      <button className={styles.button} style={{ margin: '0 33%' }}>MUSEUM</button>
      <button className={styles.button} style={{ margin: '0 63%' }}>MUSEUM</button>
      <button className={styles.connectBtn} style={{ margin: '5% 80%' }} onClick={connect}>
        {adr?'':<svg viewBox="0 0 24 24" className={styles.arr_2} xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
          ></path>
        </svg>}
        <span className={styles.text}>{adr?formatAddress(adr):'Connect Wallet'}</span>
        <span className={styles.circle}></span>
        {adr?'':<svg viewBox="0 0 24 24" className={styles.arr_1} xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
          ></path>
        </svg>}
      </button>
      <video src='sp.mp4' autoPlay muted loop style={{ pointerEvents: 'none', width: '100%', height: 'auto' }} />
    </div>
  )
}

export default Banner