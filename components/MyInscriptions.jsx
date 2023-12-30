import React, { useEffect, useState } from 'react'
import styles from 'styles/myInscriptions.module.css'
import {Input} from 'antd'
import Ski1 from './ski/Ski1'
const MyInscriptions = ({inscriptions}) => {
  return (
    <div className={styles.container}>
        <div className={styles.tittle}>My Inscription</div>
        {inscriptions?(<Ski1 />):("you don't have any inscription")}
    </div>
  )
}

export default MyInscriptions