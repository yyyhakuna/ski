import React, { useState } from 'react'
import styles from 'styles/museum.module.css'
import Image from 'next/image'
import ski0 from 'public/ski0.jpg'
import ski1 from 'public/ski1.png'
import ski2 from 'public/ski2.jpg'
import { Loader } from '@react-three/drei'
import ski3 from 'public/ski3.jpg'
import ski4 from 'public/ski4.png'
import Ski0 from './ski/Ski0'
import Ski1 from './ski/Ski1'
import Ski3 from './ski/Ski3'
import Ski4 from './ski/Ski4'
import Ski2 from './ski/Ski2'
import { Drawer } from 'antd'
const Museum = () => {
  const [open0, setOpen0] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const showDrawer0 = () => {
    setOpen0(true)
  };
  const onClose0 = () => {
    setOpen0(false);
  };
  const showDrawer1 = () => {
    setOpen1(true)
  };
  const onClose1 = () => {
    setOpen1(false);
  };
  const showDrawer2 = () => {
    setOpen2(true)
  };
  const onClose2 = () => {
    setOpen2(false);
  };
  const showDrawer3 = () => {
    setOpen3(true)
  };
  const onClose3 = () => {
    setOpen3(false);
  };const showDrawer4 = () => {
    setOpen4(true)
  };
  const onClose4 = () => {
    setOpen4(false);
  };
  return (
      <div className={styles.list}>
        <div className={styles.list_item}>
          <Image src={ski0} style={{ width: '100%', height: 'auto', }}></Image>
          <button className={styles.list_item_btn} onClick={showDrawer0} >
            VIEW 3D
          </button>
        </div>
        <Drawer title="Module" placement="bottom" onClose={onClose0} open={open0} height={500}>
          <Ski0 />
          <Loader />
        </Drawer>


        <div className={styles.list_item}>
          <Image src={ski1} style={{ width: '100%', height: 'auto', }}></Image>
          <button className={styles.list_item_btn} onClick={showDrawer1}>
            VIEW 3D
          </button>
        </div>
        <Drawer title="3D" placement="bottom" onClose={onClose1} open={open1} height={500}>
          {/* <Ski1 /> */}
        </Drawer>


        <div className={styles.list_item}>
          <Image src={ski2} style={{ width: '100%', height: 'auto', }}></Image>
          <button className={styles.list_item_btn} onClick={showDrawer2}>
            VIEW 3D
          </button>
        </div>
        <Drawer title="3D" placement="bottom" onClose={onClose2} open={open2} height={500}>
          {/* <Ski2 /> */}
        </Drawer>



        <div className={styles.list_item}>
          <Image src={ski3} style={{ width: '100%', height: 'auto', }}></Image>
          <button className={styles.list_item_btn} onClick={showDrawer3}>
            VIEW 3D
          </button>
        </div>
        <Drawer title="3D" placement="bottom" onClose={onClose3} open={open3} height={500}>
          {/* <Ski3 /> */}
        </Drawer>



        <div className={styles.list_item}>
          <Image src={ski4} style={{ width: '100%', height: 'auto', }}></Image>
          <button className={styles.list_item_btn} onClick={showDrawer4}>
            VIEW 3D
          </button>
        </div>
        <Drawer title="3D" placement="bottom" onClose={onClose4} open={open4} height={500}>
          {/* <Ski4 /> */}
        </Drawer>
      </div>

  )
}

export default Museum