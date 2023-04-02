import React, { useEffect, useState } from "react";
import styles from "./DealsCard.module.css";
import axios from "axios";




const DealsCard = ({deal,handleAddToCart}) => {
    
const [count, setCount] = useState(0);


const handleIncrease = () => {
    setCount(prev => prev+1)
}
const handleDecrease = () => {
    setCount(prev => prev-1)
}
  







  

  return (
    <>
      <div className={styles.menu_div}>
        <div className={styles.menu_div2}>
          <div className={styles.menu_list_div1}>
            <p>{deal.field}</p>
            <div className={styles.off}>
              <p >{deal.tag}</p>
            </div>
          </div>
          <div className={styles.menu_list_div2}>
            <div>
              <h1>
                {deal.title}
              </h1>
            </div>
            <div className={styles.price_tag}>
              <div>
                <p>₹{deal.m_price}</p>
                <p>₹{deal.d_price}</p>
              </div>
              <div>
                <p>inc. of all taxes</p>
              </div>
            </div>
          </div>
          <div className={styles.menu_list_div3}>
            <p>Free Cancellation</p>
          </div>
          <div className={styles.menu_list_div4}>
            <p>
              Valid for : <span>{deal.Valid_for}</span> |  Valid on : <span>{deal.Valid_on}</span> | Timings : <span>{deal.timing}</span> 
            </p>
          </div>
          <div className={styles.menu_list_div5}>
            <div>
              <div>
                <p>Menu</p>
              </div>
              <div>
                <p>Details</p>
              </div>
            </div>
            <div className={styles.addtocart}>
                {count===0 ? <button onClick={() => handleAddToCart(deal)} >Add +</button>
            :  <div className={styles.addedtocart} >
             <button className={styles.substract} onClick={handleDecrease} >-</button>
            <div className={styles.count}>{count}</div> 
            <button className={styles.add} onClick={handleIncrease} >+</button> 
            </div>   
                
            }
            
            
            </div>   
          </div>
        </div>
      </div>
    </>
  );
};

export default DealsCard;
