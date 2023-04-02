import { GET_CART_PRODUCT_ERROR, GET_CART_PRODUCT_REQUEST, GET_CART_PRODUCT_SUCCESS } from "./actionType";

const initialState = {
    isLoading:false,
    cart: [],
    isError:false
};

export const reducer = (state=initialState, {type,payload}) => {
    console.log(payload);
    switch(type){
        case GET_CART_PRODUCT_REQUEST:
            return {...state, isLoading:true}
        case GET_CART_PRODUCT_SUCCESS:
            return {...state, isLoading:false, cart:payload}
        case GET_CART_PRODUCT_ERROR: 
             return {...state, isLoading:false, isError:true} 
             default:
                return state;
    }
}          