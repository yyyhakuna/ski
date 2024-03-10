import React, { useEffect, useState } from 'react'
import styles from 'styles/mint.module.css'
import Image from 'next/image'
import { message } from 'antd'
import Logo from 'public/logo.png'
import { useFetch } from '@/hooks/useFetch'
import { ethers } from 'ethers'
import { useContract } from '@/hooks/useContract'
import { Progress } from 'antd';
import ABI from 'abi/abi.json'
const Mint = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const width = document.body.clientWidth
  const contract = useContract('0x057a354716D76629d9254f433efA20038256A387', ABI)
  const [num, setNum] = useState(null)
  const [per, setPer] = useState(null)
  useEffect(() => {
      useFetch('getMiniSchedule', 'get').then(res => {
        try{
          setNum(res.data.num)
        setPer(res.data.per)
        }catch{err=>{console.log(err);}}
      })
  })
  // const getPayAddress=()=>{
  //   const AddrList = [
  //     'bc1pemy9077tdsl24c892f4s52ac9uxg5vqgmt6wxm9jm9gy28l8ruvqk5qe3c',
  //     'bc1p5g8dk4rfqmmv9mu9kczp8favesxcyn4apllv6eewsh30hdul7ksqfdnuge',
  //     'bc1ppsaftp5tq3rdgfg6fse9ne3xl4aw8pkyd3pvmyqnr3cpyzhn2edshny6cg',
  //     'bc1pquecwy06qauunpsfya2agqd4kzh8wg70r34tt36vhlgvpcr6xyksvvxy3q',
  //     'bc1pg0gcwztqfydnt7k92dm5h6qspqh9v6zr498m5c9dnjv2zqfcnmhq2pugg3',
  //     'bc1pku26etha44373gnaf6ht33jkaljvxg8twdr4427gp96gkupgzylqr7j4qa',
  //     'bc1pgkrndelsj3amflyehf4y0xughcj99tqlp4dx8efmxkh8azu56ahq3jvw6f',
  //     'bc1pmf0fhqcslnupzlt3zkd2dl6vl7ydlp2e4lt823wwcgzuk6uwv98s48jhqp',
  //     'bc1pu7tmq78f6rfzsjd9n622009d0we5wdct0c53g8p45gupam9stnnql7rhgv',
  //     'bc1pnqnrqdf7k94p0dg9wjfarumz5v9ek6uu5r88rq6f34wnt64xgglq6npqxd'
  //   ]
  //   const randomIndex =  Math.floor(Math.random()*AddrList.length);
  //   return AddrList[randomIndex]
  // }
  const mint = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const accounts = await provider.listAccounts();
    const { chainId } = await provider.getNetwork();
    if (!accounts.length) {
      messageApi.open({
        type: 'error',
        content: "Pleases Connect Your Wallet",
      })
      return;
    }
    if (chainId !== 1) {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x1' }]
      })
    }
    // const address = await window.unisat?.getAccounts()
    // if (!address[0]) {
    // messageApi.open({
    //   type: 'error',
    //   content: "Pleases Connect Your UniSat Wallet",
    // })
    // return;
    // }
    const minted = await useFetch('getUserByAddr', 'post',
      {
        "a": 0,
        "address": `${accounts[0]}`,
        "b": 0,
        "c": 0,
        "txid": "string"
      })
    if (minted.data.b) {
      messageApi.open({
        type: 'error',
        content: "You Have Minted",
      })
      return;
    }
    const Enable = await useFetch('getEnable', 'get')
    if (!Enable.data.enable) {
      messageApi.open({
        type: 'error',
        content: "Minting not yet available.",
      });
      return;
    }
    const valueInwei = ethers.utils.parseEther('0.01')
    const tx =await contract.mintItem({ value: valueInwei })
      .catch(error => console.log(error))
      if(tx){
        await useFetch('addUserPay', 'post',
          {
            "a": 0,
            "address": `${accounts[0]}`,
            "b": 0,
            "c": 0,
            "txid": `${tx.hash}`
          })
          message.open({
            type:'success',
            content:'Mint Successfully'
          })
      }
    // let txid = await window.unisat.sendBitcoin(getPayAddress(),800000)
  }
  return (
    <div className={styles.container}>
      <div className={styles.line}></div>
      {contextHolder}
      {width < 767 ? (<Image src={Logo}></Image>) : (<video src='/logo.mp4' width="50%" autoPlay muted loop style={{ margin: 'auto' }} />)}
      <div className={styles.desc}>Step into the future of snowboarding. Own a digital masterpiece with our NFT snowboard collection. Each board is a unique work of art, digitally crafted and authenticated on the blockchain. Experience the thrill of owning a limited edition NFT snowboard that embodies the spirit of adventure and innovation.
      </div>
      <button className={styles.button} onClick={mint}>
        Mint
      </button>
      <div style={{ margin: '0 auto', width: '60%', maxHeight: '30px', display: 'flex' }}>
        <Progress percent={per * 100} status="active" trailColor='#5f03f4' showInfo={false} />
        <span className={styles.pSpan}>{num}/200</span>
      </div>
      <div className={styles.time}>Time:01.21-01.22</div>
    </div>
  )
}

export default Mint