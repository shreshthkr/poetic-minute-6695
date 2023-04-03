import axios from "axios";
import {
  GET_CART_PRODUCT_ERROR,
  GET_CART_PRODUCT_REQUEST,
  GET_CART_PRODUCT_SUCCESS,
} from "./actionType";

export const getCartProduct = () => (dispatch) => {
  dispatch({ type: GET_CART_PRODUCT_REQUEST });
  axios
    .get(`http://localhost:5000/cart`)

    .then((res) => {
      console.log(res.data);
      dispatch({ type: GET_CART_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_CART_PRODUCT_ERROR });
      console.log("err", err);
    });
};
