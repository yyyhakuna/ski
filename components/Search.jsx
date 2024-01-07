import React from 'react'
import styles from 'styles/search.module.css'
import {Input} from 'antd'
import Ski5 from './ski/Ski5'
const Search = () => {
    const search = ()=>{}
  return (
    <div className={styles.container}>
        <div className={styles.tittle}>SEARCH SPECIFIC SNOWBOARD</div>
        <div className={styles.search}>
            <Input style={{height:'25px' , marginRight:'10px'}}/>
            <button className={styles.btn} type="button" onClick={search}>
            <strong className={styles.strong}>SEARCH</strong>
            <div className={styles.container_stars}>
              <div className={styles.stars}></div>
            </div>

            <div id="glow">
              <div className={styles.circle}></div>
              <div className={styles.circle}></div>
            </div>
          </button>
        </div>
        <Ski5 />
    </div>
  )
}

export default Search