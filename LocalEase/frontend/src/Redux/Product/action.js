import axios from "axios";
import { GET_PRODUCT_ERROR, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actionType";

export const getProductRequest = () => {
    return {type:GET_PRODUCT_REQUEST}
}

export const getProductSuccess = (payload) => {
    return {type:GET_PRODUCT_SUCCESS, payload}
}

export const getProductError = () => {
    return {type:GET_PRODUCT_ERROR}
}


export const getProduct=(param) => (dispatch) => {
    dispatch(getProductRequest());
    axios.get(`https://giddy-lamb-button.cyclic.app/product`,param)
    .then((res) => {
       dispatch(getProductSuccess(res.data));
    //console.log(res.data).
    })
    .catch((err) => {
        dispatch(getProductError())
    })
}