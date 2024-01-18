import React from 'react'
import styles from 'styles/mint.module.css'
import Image from 'next/image'
import { message } from 'antd'
import Logo from 'public/logo.png'
import { useFetch } from '@/hooks/useFetch'
import {ethers} from 'ethers'
import { useContract } from '@/hooks/useContract'
import ABI from 'abi/abi.json'
const Mint = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const width = document.body.clientWidth
  const getPayAddress=()=>{
    const AddrList = [
      'bc1pemy9077tdsl24c892f4s52ac9uxg5vqgmt6wxm9jm9gy28l8ruvqk5qe3c',
      'bc1p5g8dk4rfqmmv9mu9kczp8favesxcyn4apllv6eewsh30hdul7ksqfdnuge',
      'bc1ppsaftp5tq3rdgfg6fse9ne3xl4aw8pkyd3pvmyqnr3cpyzhn2edshny6cg',
      'bc1pquecwy06qauunpsfya2agqd4kzh8wg70r34tt36vhlgvpcr6xyksvvxy3q',
      'bc1pg0gcwztqfydnt7k92dm5h6qspqh9v6zr498m5c9dnjv2zqfcnmhq2pugg3',
      'bc1pku26etha44373gnaf6ht33jkaljvxg8twdr4427gp96gkupgzylqr7j4qa',
      'bc1pgkrndelsj3amflyehf4y0xughcj99tqlp4dx8efmxkh8azu56ahq3jvw6f',
      'bc1pmf0fhqcslnupzlt3zkd2dl6vl7ydlp2e4lt823wwcgzuk6uwv98s48jhqp',
      'bc1pu7tmq78f6rfzsjd9n622009d0we5wdct0c53g8p45gupam9stnnql7rhgv',
      'bc1pnqnrqdf7k94p0dg9wjfarumz5v9ek6uu5r88rq6f34wnt64xgglq6npqxd'
    ]
    const randomIndex =  Math.floor(Math.random()*AddrList.length);
    return AddrList[randomIndex]
  }
  const mint = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const accounts = await provider.listAccounts();
    const {chainId} = await provider.getNetwork();
    if(!accounts.length){
      messageApi.open({
        type: 'error',
        content: "Pleases Connect Your Wallet",
      })
      return;
    }
    console.log(chainId);
    // if(chainId!==5){
    //   await window.ethereum.request({
    //     method:'wallet_switchEthereumChain',
    //     params:[{chainId:'0x5'}]
    //   })
    // }
    const contract = useContract('0xB06f6E0Dc870bA58f4592b53d887d036A11e04C8',ABI)
    console.log(contract.TOTAL_SUPPLY().then(data=>console.log(data)));
    // const address = await window.unisat?.getAccounts()
    // if (!address[0]) {
      // messageApi.open({
      //   type: 'error',
      //   content: "Pleases Connect Your UniSat Wallet",
      // })
      // return;
    // }
    // const minted = await useFetch('getUserByAddr', 'post',
    //   {
    //     "a": 0,
    //     "address": `${accounts[0]}`,
    //     "b": 0,
    //     "c": 0,
    //     "txid": "string"
    //   })
    // if (minted.data.b) {
    //   messageApi.open({
    //     type: 'error',
    //     content: "You Have Minted",
    //   })
    //   return;
    // }
    // const Enable = await useFetch('getEnable', 'get')
    // if (!Enable.data.enable) {
    //   messageApi.open({
    //     type: 'error',
    //     content: "Minting not yet available.",
    //   });
    //   return;
    // }
    // let txid = await window.unisat.sendBitcoin(getPayAddress(),800000)
  //   await useFetch('addUserPay', 'post',
  //     {
  //       "a": 0,
  //       "address": `${address}`,
  //       "b": 0,
  //       "c": 0,
  //       "txid": `${txid}`
  //     })
  //     messageApi.open({
  //       type:'success',
  //       content:"Mint Successfully"
  //     })
  }
  return (
    <div className={styles.container}>
      <div className={styles.line}></div>
      {contextHolder}
      {width<767?(<Image src={Logo}></Image>):(<video src='/logo.mp4' width="50%" autoPlay muted loop style={{ margin: 'auto' }} />)}
      <div className={styles.desc}>Step into the future of snowboarding. Own a digital masterpiece with our NFT snowboard collection. Each board is a unique work of art, digitally crafted and authenticated on the blockchain. Experience the thrill of owning a limited edition NFT snowboard that embodies the spirit of adventure and innovation.
      </div>
      <button className={styles.button} onClick={mint}>
        Mint
      </button>
      <Progress percent={50} status="active" />
      <div className={styles.time}>Time:01.12-01.13</div>
    </div>
  )
}

export default Mint