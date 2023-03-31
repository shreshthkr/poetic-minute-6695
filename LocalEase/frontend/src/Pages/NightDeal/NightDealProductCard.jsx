import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./NightDealProductCard.module.css"



const NightDealProductCard = ({product}) => {

    const navigate = useNavigate();

const handleNavigate=()=>{
    navigate("/deals")
}

  return (
    <>
      <div className={styles.product_box} onClick={handleNavigate} >
          <div className={styles.details}>
             <div className={styles.image}>
                <img src={product.img_src} alt={product.heading} />
             </div>
             <div className={styles.info}>
                <h3>{product.heading}</h3>
                <p>{product.value}</p>
                <div className={styles.deals} >
                    <div className={styles.deals1}><p>DEALS</p></div>
                    <div className={styles.deals2}><p>Drinks with Starters from {product.price} </p></div>
                </div>
             </div>
          </div>
             <div className={styles.bought}>
                <div>
                <p>{product.field}</p>
                </div>
             </div>
      </div>
    </>
  )
}

export default NightDealProductCard;