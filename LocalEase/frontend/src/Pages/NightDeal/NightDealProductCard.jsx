import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./NightDealProductCard.module.css"



const NightDealProductCard = () => {

    const navigate = useNavigate();

const handleNavigate=()=>{
    navigate("/deals")
}

  return (
    <>
      <div className={styles.product_box} onClick={handleNavigate} >
          <div className={styles.details}>
             <div className={styles.image}>
                <img src="https://img4.nbstatic.in/tr:w-350/60deccba40e9df000b9f27ac.jpg" alt="chamber" />
             </div>
             <div className={styles.info}>
                <h3>Lord of the Drinks Chamber</h3>
                <p>Rajouri Garden Main Market, Rajouri Garden</p>
                <div className={styles.deals} >
                    <div className={styles.deals1}><p>DEALS</p></div>
                    <div className={styles.deals2}><p>Drinks with Starters from ₹1599 </p></div>
                </div>
             </div>
          </div>
             <div className={styles.bought}>
                <div>
                <p>13,413 Bought</p>
                </div>
             </div>
      </div>
    </>
  )
}

export default NightDealProductCard