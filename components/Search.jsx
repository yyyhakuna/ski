import React ,{useEffect ,useState}from 'react'
import styles from 'styles/search.module.css'
import {Input} from 'antd'
import Ski5 from '@/components/ski/Ski5'
const Search = () => {
    const search = ()=>{}
    // const [Ski5, setSki5] = useState(null);

  // useEffect(() => {
  //   let observer;
  //   if (Ski5) {
  //     return; 
  //   }

  //   observer = new IntersectionObserver(entries => {
  //     if (entries[0].isIntersecting) {
  //       import('@/components/ski/Ski5').then(cmp => {
  //         setSki5(cmp.default);
  //         observer.disconnect();
  //       });  
  //     }
  //   });

  //   observer.observe(document.querySelector('#ski5'));

  //   return () => observer.disconnect();
  // }, [Ski5]);
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
        {/* {Ski5 ?<Ski5 id='ski5'/>:'loading'} */}
        <Ski5 />
    </div>
  )
}

export default Search