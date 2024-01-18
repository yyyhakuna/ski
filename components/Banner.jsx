import React, { useEffect, useState } from 'react'
import styles from 'styles/banner.module.css'
import { message } from 'antd'
import Image from 'next/image'
import BannerImg from 'public/banner.jpg'
import { ethers } from 'ethers'
const Banner = (props) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [adr, setAdr] = useState(null)
  const width = document.body.clientWidth
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const setState = async () => {
    const accounts = await provider.listAccounts();
    if (accounts) {
      setAdr(accounts[0])
    }
  }
  const clickNav = e => {
    switch (e.target.textContent) {
      case 'MINT':
        props.mintRef.current.scrollIntoView({
          behavior: 'smooth'
        });
        break;
      case 'GALLERY':
        props.galleryRef.current.scrollIntoView({
          behavior: 'smooth'
        });
        break;
      case 'ABOUT':
        props.aboutRef.current.scrollIntoView({
          behavior: 'smooth'
        });
        break;
    }
  }
  // const connect = async () => {
    // if (adr) {
    //   return
    // }
  //   if (typeof window.unisat === 'undefined') {
  //     messageApi.open({
  //       type: 'error',
  //       content: 'Please Install Unisat',
  //     });
  //   }
  //   try {
  //     let accounts = await window.unisat.requestAccounts();
  //     setAdr(accounts[0])
  //   } catch (e) {
  //     console.log('connect failed');
  //   }
  // }

  const connect = async ()=>{
    if(!window.ethereum){
      messageApi.open({
        type:'error',
        content:'Please Install A Wallect'
      })
      return;
    }
    if (adr) {
      return
    }
    await provider.send('eth_requestAccounts' ,[])
  //   await window.ethereum.request({
  //     method: 'wallet_switchEthereumChain',
  //     params: [{ chainId: '0x1' }], // 0x1是以太坊的链id
  // })
    const accounts =await provider.listAccounts()
    setAdr(accounts[0])
  }

  const formatAddress = (address) => {
    return `${address.substring(0, 4)}...${address.substring(address.length - 4)}`
  }

  // const getInscriptions = async () => {
  //   const ids = await window.unisat.getInscriptions(0, 1000)
  //   // props.setInscriptions(ids)
  // }

  useEffect(() => {
    setState()
  }, [])

  // useEffect(() => {
  //   getInscriptions()
  // }, [adr])
  return (
    <div>
      {contextHolder}
      <button className={`cursor-pointer group block px-5 py-2 rounded-md bg-black text-white ${width<767?'text-1xl':'text-4xl'} font-bold shadow-2xl hover:scale-110 transition active:scale-90 ${width<767?'m-6':'m-14'} absolute`}>
        <a className="group-hover:[text-shadow:3px_3px_6px_var(--tw-shadow-color)] shadow-white" href='https://twitter.com/skadi_club' target="_blank">𝕏</a>
      </button>
      <button className={styles.button} style={{ margin: '0 3%', top: width < 676 ? '40%' : '80%' }} onClick={clickNav}>MINT</button>
      <button className={styles.button} style={{ margin: '0 31%', display: width < 768 ? 'none' : 'inline-block', top: width < 676 ? '40%' : '80%' }} onClick={clickNav}>GALLERY</button>
      <button className={styles.button} style={{ margin: width < 676 ? '0 50%' : '0 63%', top: width < 676 ? '40%' : '80%' }} onClick={clickNav}>ABOUT</button>
      <button className={width < 767 ? styles.connectBtnPhone : styles.connectBtn} style={{ margin: '5% 80%' }} onClick={connect}>
        {adr ? '' : <svg viewBox="0 0 24 24" className={styles.arr_2} xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
          ></path>
        </svg>}
        <span className={styles.text}>{adr ? formatAddress(adr) : 'Connect  Wallet'}</span>
        <span className={styles.circle}></span>
        {adr ? '' : <svg viewBox="0 0 24 24" className={styles.arr_1} xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
          ></path>
        </svg>}
      </button>
      {width < 767 ? (<Image src={BannerImg}></Image>) : (<video src='sp.mp4' autoPlay muted loop style={{ pointerEvents: 'none', width: '100%', height: 'auto' }} />)}
    </div>
  )
}

export default Banner