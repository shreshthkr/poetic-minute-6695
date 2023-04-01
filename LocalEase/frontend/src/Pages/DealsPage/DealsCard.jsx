import React from "react";
import styles from "./DealsCard.module.css";
const DealsCard = () => {
  return (
    <>
      <div className={styles.menu_div}>
        <div className={styles.menu_div2}>
          <div className={styles.menu_list_div1}>
            <p>67 Bought</p>
            <div className={styles.off}>
              <p >53% OFF</p>
            </div>
          </div>
          <div className={styles.menu_list_div2}>
            <div>
              <h1>
                4 Beer Pints (330ml) / 4 IMFL (30ml) / 4 Mocktails + 1 Starter/
                Pizza/ Pasta (Veg/Non Veg)
              </h1>
            </div>
            <div className={styles.price_tag}>
              <div>
                <p>₹ 1,699</p>
                <p>₹ 799</p>
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
              Valid for : <span>2 People</span> |  Valid on : <span>All Days</span> | Timings : <span>12 PM - 6 PM</span> 
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
            <div>
              <button>Add +</button>
            </div>   
          </div>
        </div>
      </div>
    </>
  );
};

export default DealsCard;
