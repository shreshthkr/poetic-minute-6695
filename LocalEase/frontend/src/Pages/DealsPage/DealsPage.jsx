import React from 'react'
import styles from "./DealsPage.module.css"


export const DealsPage = () => {
  return (
    <>
     <div className={styles.container}>
         <div className={styles.heading}>
            <div className={styles.title}>
              <div><p>bars, Lounges & pubs</p>
              <p>Based on 4594 ratings</p>
              </div>
              
              <div>
                <h1>Lord Of The Drinks Chamber</h1>
                <div className={styles.logo} >
                  <img src="https://www.nearbuy.com/static/images/nb.png" alt="nb logo" />
                  | <p>4.4/5</p>
                </div>
              </div>
              <div></div>
            </div>
            <div className={styles.image}></div>
         </div>
         <div className={styles.Deals}></div>
      </div>  
    </>
  )
}
