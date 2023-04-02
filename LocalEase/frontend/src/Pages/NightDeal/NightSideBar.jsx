import React,{useState ,useEffect}from "react";
import styles from "./NightSideBar.module.css";
import { RiArrowRightSFill } from "react-icons/ri";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";



export const NightSideBar = () => {


  const [searchParams, setSearchParams] = useSearchParams();
  const initialState = searchParams.getAll("value"); 
  const initialOrder = searchParams.get("order");
  const [category, setCategory] = useState(initialState || [])
  const [order, setOrder] = useState(initialOrder || "");

  console.log(initialState);
const handleChange = (e) => {
  let newCategory = [...category];
  let value = e.target.value;


if(newCategory.includes(value)){
  newCategory.splice(newCategory.indexOf(value),1)
}else{
  newCategory.push(value);
}
setCategory(newCategory);
}


useEffect(()=>{
  let param = {
    category
  };

  setSearchParams(param);
},[category])

//  const handleSort = () => {

//  }


  return (
    <>
      <div className={styles.container}>
        <div className={styles.promo}>
          <div className={styles.inpromo}>
            <div className={styles.promo_a}>
              <p>Win Rs 500 instant off code</p>
            </div>
            <div className={styles.promo_b}>
              <p>Valid on all prepaid deals | No minimum purchase</p>
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
        <div className={styles.filter}>
          <div className={styles.filter_in}>
            <div className={styles.categories_text}>
              <p>Categories</p>
            </div>
            <div className={styles.restaurant}>
              <div>
                <p>Restaurants</p>
              </div>
              <div>
                (129)
                <RiArrowRightSFill color="red" cursor="pointer" />
              </div>
            </div>
            <div className={styles.hr}>
              <hr />
            </div>
            <div className={styles.location}>
              <p>Location</p>
            </div>
            <div className={styles.search}>
              <input type="text" placeholder="Search for a location" />
            </div>
            <div className={styles.Accordion}>
              <Accordion
                defaultIndex={[0]}
                allowMultiple
                backgroundColor="#fff"
              >
                <AccordionItem backgroundColor="white">
                  <h2 backgroundColor="white">
                    <AccordionButton backgroundColor="white"
                     border="none"
                     _hover={{backgroundColor:"white"}}
                     >
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        height="25px"
                        backgroundColor="white"
                        _hover={{backgroundColor:"white"}}
                      >
                        <Text
                          backgroundColor="white"
                          _hover={{ color: "red.500" }}
                        >
                          New Delhi
                        </Text>
                      </Box>
                      <AccordionIcon backgroundColor="white" />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                    width="100%"
                    gap="5px"
                    backgroundColor="#fff"
                  >
                    <Box
                      width="100%"
                      display="flex"
                      gap="10px"
                      backgroundColor="#fff"
                    >
                      <input type="checkbox"
                      value="Aerocity"
                      onChange={handleChange}
                      checked={category.includes("Aerocity")}
                      />
                      <Box
                        width="100%"
                        display="flex"
                        justifyContent="space-between"
                        backgroundColor="#fff"
                      >
                        <label backgroundColor="#fff">AeroCity</label>
                        <Text backgroundColor="#fff" fontSize="12px">
                          (7)
                        </Text>
                      </Box>

                      <br />
                    </Box>
                    <Box
                      width="100%"
                      display="flex"
                      gap="10px"
                      backgroundColor="#fff"
                    >
                      <input 
                      type="checkbox"
                      value="HKV"
                      onChange={handleChange}
                      checked={category.includes("HKV")}
                      />
                      <Box
                        width="100%"
                        display="flex"
                        justifyContent="space-between"
                        backgroundColor="#fff"
                      >
                        <label backgroundColor="#fff">HKV</label>
                        <Text backgroundColor="#fff" fontSize="12px">
                          (7)
                        </Text>
                      </Box>

                      <br />
                    </Box>
                    <Box
                      width="100%"
                      display="flex"
                      gap="10px"
                      backgroundColor="#fff"
                    >
                      <input type="checkbox"
                      value="Rajouri Garden Main Market, Rajouri Garden"
                      onChange={handleChange}
                      checked={category.includes("Rajouri Garden Main Market, Rajouri Garden")}
                      />
                      <Box
                        width="100%"
                        display="flex"
                        justifyContent="space-between"
                        backgroundColor="#fff"
                      >
                        <label backgroundColor="#fff">Rajouri Garden</label>
                        <Text backgroundColor="#fff" fontSize="12px">
                          (20)
                        </Text>
                      </Box>

                      <br />
                    </Box>
                    <Box
                      width="100%"
                      display="flex"
                      gap="10px"
                      backgroundColor="#fff"
                    >
                      <input type="checkbox"
                        value="Connaught Place"
                        onChange={handleChange}
                        checked={category.includes("Connaught Place")}
                      />
                      <Box
                        width="100%"
                        display="flex"
                        justifyContent="space-between"
                        backgroundColor="#fff"
                      >
                        <label backgroundColor="#fff">Connaught Place</label>
                        <Text backgroundColor="#fff" fontSize="12px">
                          (7)
                        </Text>
                      </Box>

                      <br />
                    </Box>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem backgroundColor="#fff">
                  <h2 backgroundColor="#fff">
                    <AccordionButton
                      backgroundColor="#fff"
                      border="none"
                      marginTop="15px"
                      _hover={{backgroundColor:"white"}}
                    >
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        backgroundColor="#fff"
                        height="25px"
                      >
                        <Text backgroundColor="#fff">Ghaziabad</Text>
                      </Box>
                      <AccordionIcon backgroundColor="#fff" />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                    width="100%"
                  >
                    <Box
                      width="100%"
                      display="flex"
                      gap="10px"
                      backgroundColor="#fff"
                    >
                      <input type="checkbox"
                         value="Sahibabad"
                         onChange={handleChange}
                         checked={category.includes("Sahibabad")}
                      />
                      <Box
                        width="100%"
                        display="flex"
                        justifyContent="space-between"
                        backgroundColor="#fff"
                      >
                        <label backgroundColor="#fff">Sahibabad</label>
                        <Text backgroundColor="#fff" fontSize="12px">
                          (1)
                        </Text>
                      </Box>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
