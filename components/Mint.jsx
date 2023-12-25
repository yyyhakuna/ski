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
      <div className={styles.desc}>Step into the future of snowboarding. Own a digital masterpiece with our exclusive NFT snowboard collection. Each board is a unique work of art, digitally crafted and authenticated on the blockchain. Experience the thrill of owning a limited edition NFT snowboard that embodies the spirit of adventure and innovation. 
      </div>
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
      <div className={styles.time}>Time:09.01-09.12</div>
    </div>
  )
}

export default Mint