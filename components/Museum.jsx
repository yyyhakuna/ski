import React, { Suspense, lazy, useState } from 'react'
import styles from 'styles/museum.module.css'
import Image from 'next/image'
import ski0 from 'public/ski0.jpg'
import ski1 from 'public/ski1.png'
import ski2 from 'public/ski2.jpg'
import ski3 from 'public/ski3.jpg'
import ski4 from 'public/ski4.jpg'
const Ski0 = lazy(()=>import ('./ski/Ski0'))
const Ski1 = lazy(()=>import ('./ski/Ski1'))
const Ski2 = lazy(()=>import ('./ski/Ski2'))
const Ski3 = lazy(()=>import ('./ski/Ski3'))
const Ski4 = lazy(()=>import ('./ski/Ski4'))
import {  Modal } from 'antd'
const Museum = () => {
  const width = document.body.clientWidth
  const [open0, setOpen0] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const showModal0 = () => {
    setTimeout(() => {
      setOpen0(true)
    }, 2000);
  }
  const showModal1 = () => {
    setTimeout(() => {
      setOpen1(true)
    }, 3000);
  };
  const showModal2 = () => {
    setTimeout(() => {
      setOpen2(true)
    }, 5000);
  };
  const showModal3 = () => {
    setTimeout(() => {
      setOpen3(true)
    }, 10000);
  };
  const showModal4 = () => {
    setTimeout(() => {
      setOpen4(true)
    }, 1000);
  };
  return (
    <div>
      <div className={styles.text} style={{display: width<767?'none' : 'block'}}>EXCLUSIVE SNOWBOARD</div>
      <video src="skadi.mp4" autoPlay muted loop style={{width:'100vw' ,height:'auto'}}></video>
      <div style={{ height: '1px' }}></div>
      <div className={styles.list}>
        <div className={styles.list_item} style={{display:width<600?'none':'flex'}}>
          <Image src={ski0} style={{ width: '100%', height: 'auto', }}></Image>
          <button className={styles.btn} type="button" onClick={showModal0}>
            <strong className={styles.strong}>SHOW 3D</strong>
            <div className={styles.container_stars}>
              <div className={styles.stars}></div>
            </div>

            <div id="glow">
              <div className={styles.circle}></div>
              <div className={styles.circle}></div>
            </div>
          </button>
        </div>
        <Modal title="Modal"
          centered={false}
          open={open0}
          onCancel={() => setOpen0(false)}
          width={1000}
          closeIcon={null}
          footer={null}
          // styles={{
          //   header: {
          //     backgroundColor: 'red'  
          //   }
          // }}
        >
          <Suspense>
            <Ski0 />
          </Suspense>
        </Modal>

        <div className={styles.list_item}>
          <Image src={ski1} style={{ width: '100%', height: 'auto', }}></Image>
          <button className={styles.btn} type="button" onClick={showModal1}>
            <strong className={styles.strong}>SHOW 3D</strong>
            <div className={styles.container_stars}>
              <div className={styles.stars}></div>
            </div>

            <div id="glow">
              <div className={styles.circle}></div>
              <div className={styles.circle}></div>
            </div>
          </button>
        </div>
        <Modal title="Modal"
          centered={false}
          open={open1}
          onCancel={() => setOpen1(false)}
          width={1000}
          closeIcon={null}
          footer={null}
        >
          <Suspense>
            <Ski1 />
          </Suspense>
        </Modal>


        <div className={styles.list_item}>
          <Image src={ski2} style={{ width: '100%', height: 'auto', }}></Image>
          <button className={styles.btn} type="button" onClick={showModal2}>
            <strong className={styles.strong}>SHOW 3D</strong>
            <div className={styles.container_stars}>
              <div className={styles.stars}></div>
            </div>

            <div id="glow">
              <div className={styles.circle}></div>
              <div className={styles.circle}></div>
            </div>
          </button>
        </div>
        <Modal title="Modal"
          centered={false}
          open={open2}
          onCancel={() => setOpen2(false)}
          width={1000}
          closeIcon={null}
          footer={null}
        >
          <Suspense>
            <Ski2 />
          </Suspense>
        </Modal>



        <div className={styles.list_item}>
          <Image src={ski3} style={{ width: '100%', height: 'auto', }}></Image>
          <button className={styles.btn} type="button" onClick={showModal3}>
            <strong className={styles.strong}>SHOW 3D</strong>
            <div className={styles.container_stars}>
              <div className={styles.stars}></div>
            </div>

            <div id="glow">
              <div className={styles.circle}></div>
              <div className={styles.circle}></div>
            </div>
          </button>
        </div>
        <Modal title="Modal"
          centered={false}
          open={open3}
          onCancel={() => setOpen3(false)}
          width={1000}
          closeIcon={null}
          footer={null}
        >
          <Suspense>
            <Ski3 />
          </Suspense>
        </Modal>

        <div className={styles.list_item}>
          <Image src={ski4} style={{ width: '100%', height: 'auto', }}></Image>
          <button className={styles.btn} type="button" onClick={showModal4}>
            <strong className={styles.strong}>SHOW 3D</strong>
            <div className={styles.container_stars}>
              <div className={styles.stars}></div>
            </div>

            <div id="glow">
              <div className={styles.circle}></div>
              <div className={styles.circle}></div>
            </div>
          </button>
        </div>
        <Modal title="Modal"
          centered={false}
          open={open4}
          onCancel={() => setOpen4(false)}
          width={1000}
          closeIcon={null}
          footer={null}
        >
          <Suspense>
            <Ski4 />
          </Suspense>
        </Modal>
      </div>
    </div>

  )
}

export default Museum