import React from 'react'
import styles from 'styles/search.module.css'
import {Input} from 'antd'
import Ski1 from './ski/Ski1'
const Search = () => {
  return (
    <div className={styles.container}>
        <div className={styles.tittle}>MY INNSCRIPTION</div>
        <Ski1 />
    </div>
  )
}

export default Search