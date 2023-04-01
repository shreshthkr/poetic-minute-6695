import React from 'react'
import styles from "./DealsPage.module.css"
import DealsCard from './DealsCard'


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
              <div>
                <p>Rajouri Garden Main Market, Rajouri Garden</p>
              </div>
            </div>
            <div className={styles.image}>
              <img src="https://img4.nbstatic.in/tr:w-500/60deccba40e9df000b9f27ac.jpg" alt="Lords and drinks" />
              <img src="https://img4.nbstatic.in/tr:w-500/63f60d648db992000be134e4.jpg" alt="pic" />
            </div>
         </div>
         <div className={styles.Deals}>
           <div className={styles.about}>
                <div className={styles.firstdiv}>
                  <div className={styles.dealsa} >
                    <p>Deals</p>
                  </div>
                  <div className={styles.abouta}>
                    <p>About</p>
                  </div>
                  <div className={styles.photos}>
                    <p>Photos</p>
                  </div>
                </div>
                <div className={styles.seconddiv}>
                  <div className={styles.seconda}>
                    <div className={styles.deals_data} >
                      <DealsCard />
                    </div>
                    <div className={styles.about_data}></div>

                  </div>
                  <div className={styles.secondb}></div>
                </div>
           </div>
         </div>
      </div>  
    </>
  )
}
