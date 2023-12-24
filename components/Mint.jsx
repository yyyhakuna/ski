import React from 'react'
import styles from 'styles/mint.module.css'
import { useFetch } from '@/hooks/useFetch'
import {message} from 'antd'
const Mint = () => {
  const [messageApi, contextHolder] = message.useMessage();
  return (
    <div className={styles.container}>
      {contextHolder}
      <video src='/logo.mp4' width="50%" autoPlay muted loop style={{margin:'auto'}}/>
      <div className={styles.desc}>Welcome to Skadi Club! We are an innovative team dedicated to creating a premier snowboarding community for the young and adventurous in the web3 era.
        At Skadi Club, our core philosophy revolves around merging real-world snowboarding experiences with blockchain technology. Through our NFT club card
      </div>
      <div className={styles.time}>Time:09.01-09.12</div>
      <button className={styles.button} onClick={async() => {
         const Enable =await useFetch('getEnable', 'get')
          if(!Enable.data.enable){
            messageApi.open({
              type: 'error',
              content: "it's not the correct time",
            });
          }
      }}>
        Mint
      </button>
    </div>
  )
}

export default Mint