import React from 'react'
import styles from 'styles/mint.module.css'
import { useFetch } from '@/hooks/useFetch'
import { message } from 'antd'
const Mint = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const mint = async () => {
    const address = await window.unisat?.getAccounts()
    if (!address[0]) {
      messageApi.open({
        type: 'error',
        content: "Pleases Connect Your Unnisat Wallet",
      })
      return;
    }
    const minted = await useFetch('getUserByAddr', 'post',
      {
        "a": 0,
        "address": `${address}`,
        "b": 0,
        "c": 0,
        "txid": "string"
      })
    if (minted.data.b) {
      messageApi.open({
        type: 'error',
        content: "You Have Been Minted",
      })
      return;
    }
    const Enable = await useFetch('getEnable', 'get')
    if (!Enable.data.enable) {
      messageApi.open({
        type: 'error',
        content: "it's not the correct time",
      });
    }
    let txid = await window.unisat.sendBitcoin('bc1qg4vzlx4lr3v8sspchx7f59gj6l660hmcnf3dlx',1000)
    useFetch('addUserPay', 'post',
      {
        "a": 0,
        "address": `${address}`,
        "b": 0,
        "c": 0,
        "txid": `${txid}`
      })

  }
  return (
    <div className={styles.container}>
      {contextHolder}
      <video src='/logo.mp4' width="50%" autoPlay muted loop style={{ margin: 'auto' }} />
      <div className={styles.desc}>Step into the future of snowboarding. Own a digital masterpiece with our exclusive NFT snowboard collection. Each board is a unique work of art, digitally crafted and authenticated on the blockchain. Experience the thrill of owning a limited edition NFT snowboard that embodies the spirit of adventure and innovation.
      </div>
      <button className={styles.button} onClick={mint}>
        Mint
      </button>
      <div className={styles.time}>Time:09.01-09.12</div>
    </div>
  )
}

export default Mint