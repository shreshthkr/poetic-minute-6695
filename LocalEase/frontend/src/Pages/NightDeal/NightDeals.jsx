import React, { useEffect, useState } from "react";
import styles from "./NightDeals.module.css";
import NightDealProductCard from "./NightDealProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getProduct } from "../../Redux/Product/action";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { NightSideBar } from "./NightSideBar";

export const NightDeals = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  // const [productData, setProductData] = useState([]);
  const productData = useSelector((store) => {
    return store.productReducer.product;
  });

  let obj = {
    params: {
      category: searchParams.getAll("category"),
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order"),
    },
  };

  useEffect(() => {
    dispatch(getProduct(obj));
  }, [location.search]);

  return (
    <div>
      <div className={styles.back}>
        <div className={styles.crum}>
          <Breadcrumb
            spacing="8px"
            separator={
              <ChevronRightIcon fontSize="15px" color="#999" fontWeight="600" />
            }
          >
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/"
                fontSize="12px"
                color="#999"
                fontWeight="600"
                transition=".5s"
                textDecoration="none"
                cursor="pointer"
              >
                NEARBUY
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink
                href="#"
                fontSize={[10, 10, 12]}
                color="#999"
                fontWeight="600"
                transition=".5s"
                textDecoration="none"
                cursor="pointer"
              >
                DEALS IN NEW DELHI
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink
                href="/nightdeals"
                fontSize={[10, 10, 12]}
                color="#999"
                fontWeight="600"
                transition=".5s"
                textDecoration="none"
                cursor="pointer"
              >
                DRINKS & NIGHTLIFE TAGS - ALL IN NEW DELHI
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className={styles.container}>
          <div className={styles.main}>
            <div className={styles.tags}>
              <div className={styles.promo}>
                <div className={styles.promo2}>
                  <p>Promos & Filters</p>
                </div>
              </div>
              <div className={styles.life}>
                <div className={styles.life2}>
                  <p>Drinks & Nightlife Tags - All in New Delhi</p>
                </div>

                <div className={styles.box}>
                  <div className={styles.box2}>
                    <button className={styles.button1}>Near me</button>
                    <button className={styles.button2}>Popular</button>
                    <button className={styles.button3}>What's New</button>
                    <button className={styles.button4}>
                      Price (High to Low)
                    </button>
                    <button className={styles.button5}>
                      Price (Low to High)
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.container2}>
              <div className={styles.side}>
                <NightSideBar />
              </div>
              <div className={styles.product_list}>
                {productData.length > 0 &&
                  productData.map((el) => {
                    return <NightDealProductCard key={el._id} product={el} />;
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
