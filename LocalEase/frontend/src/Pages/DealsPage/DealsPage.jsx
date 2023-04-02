import React, { useEffect, useState } from "react";
import styles from "./DealsPage.module.css";
import DealsCard from "./DealsCard";
import { useDispatch, useSelector } from "react-redux";
import { getDeal } from "../../Redux/Deals/action";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { getCartProduct } from "../../Redux/Cart/action";

export const DealsPage = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dealData = useSelector((store) => {
    return store.dealReducer.deal;
  });
  const cartData = useSelector((store) => {
    return store.cartReducer.cart;
  })
  const [productDetail, setProductDetail] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    dispatch(getDeal());
  }, []);

  useEffect(()=>{
    dispatch(getCartProduct())
  },[])
  useEffect(() => {
    fetch(`https://giddy-lamb-button.cyclic.app/product?id=${id}`)
      .then((res) => res.json())
      .then((res) => setProductDetail(res));
  }, [id]);
 
  const handleAddToCart =(deal) => {
    return axios.post(`http://localhost:5000/cart`,{
        data:deal,
        qunatity:1
       })
       .then((res) => {
             setCart([...cart,res.data.data]);
           alert("Item added to cart")
       })
       .catch((err) => {
        console.log(err)
       })
}

function handleClick() {
  navigate('/checkout');
}

  return (
    <>
      <div className={styles.container}>
        {productDetail.length > 0 &&
          productDetail.map((el) => (
            <div className={styles.heading}>
              <div className={styles.title}>
                <div>
                  <p>bars, Lounges & pubs</p>
                  <p>Based on 4594 ratings</p>
                </div>

                <div className={styles.prodHead}>
                  <h1>{el.heading}</h1>
                  <div className={styles.logo}>
                    <img src={el.rating_img_src} alt="nb logo" />| <p><span>{el.rating}</span>/5</p>
                  </div>
                </div>
                <div className={styles.address}>
                  <p>{el.category}</p>
                </div>
              </div>
              <div className={styles.image}>
                <img
                  src={el.img_src}
                  alt="Lords and drinks"
                />
                <img
                  src="https://img4.nbstatic.in/tr:w-500/63f60d648db992000be134e4.jpg"
                  alt="pic"
                />
              </div>
            </div>
          ))}
        <div className={styles.Deals}>
          <div className={styles.about}>
            <div className={styles.firstdiv}>
              <div className={styles.dealsa}>
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
                <div className={styles.deals_data}>
                  {dealData.length > 0 &&
                    dealData.map((el) => {
                      return <DealsCard key={el.id} deal={el} 
                      handleAddToCart={handleAddToCart}
                      />;
                    })}
                </div>
                <div className={styles.about_data}></div>
              </div>
              <div className={styles.secondb}>
                <div className={styles.secondb_inside}>
                
                    <div className={styles.order}>
                      <div className={styles.order_first}>
                        <p>Your order</p>
                      </div>
                      <div className={styles.order_second}>
                          {cartData.length === 0 ?
                       ( <div className={styles.order_second2}>
                          <p className={styles.option}>Please add an option</p>
                          <div>
                          <p className={styles.empty}>Your order is empty</p>
                        </div>
                        <div className={styles.line}>
                        <hr />
                      </div>
                      <div className={styles.order_third}>
                        <p>Total:</p>
                     <p>0</p> 
                      
                      </div>
                        </div>)
                       : <div className={styles.order_second3} >
                       {cartData.length>0 && cartData.map((el) => {
                        return <div className={styles.list}>
                        <p>{el.data.title}</p>
                        <p>{el.data.d_price}</p>
                        </div>
  })}

<div className={styles.order_third}>
                        <p>Total:</p>
                        {cartData && (
                          <p>{cartData.reduce((acc, item) => acc + parseFloat(item.data.d_price), 0)}</p> 
                      
                          )}
                      </div>
                          </div> 
                          
                          }
                       
                      </div>
                      
                      <div className={styles.order_fourth}>
                      
                        <button onClick={handleClick}>BUY NOW</button>
                      
                      </div>
                    </div>
               
                  <div className={styles.promo_code}>
                    <div className={styles.promo}>
                      <div className={styles.inpromo}>
                        <div className={styles.promo_a}>
                          <p>Win Rs 500 instant off code</p>
                        </div>
                        <div className={styles.promo_b}>
                          <p>
                            Valid on all prepaid deals | No minimum purchase
                          </p>
                        </div>
                        <div className={styles.promo_c}>
                          <div className={styles.ease}>
                            <p>LOCALEASE</p>
                          </div>
                          <div className={styles.copy}>
                            <p>Copy</p>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className={styles.promo_d}>
                        <div className={styles.valid}>
                          <p>Valid till 04 Apr 2023</p>
                        </div>
                        <div className={styles.know}>
                          <p>Know more</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
