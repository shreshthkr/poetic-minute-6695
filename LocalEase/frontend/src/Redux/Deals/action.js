import axios from "axios";
import { GET_DEAL_ERROR, GET_DEAL_REQUEST, GET_DEAL_SUCCESS } from "./actionType";

export const getDealRequest = () => {
    return {type: GET_DEAL_REQUEST}
}


export const getDealSuccess = (payload) => {
    return {type: GET_DEAL_SUCCESS, payload}
}


export const getDealError = () => {
    return {type: GET_DEAL_ERROR}
}

export const getDeal = () => (dispatch) => {
    dispatch(getDealRequest());
    axios.get(`https://giddy-lamb-button.cyclic.app/deal`)
    .then((res) => {
        dispatch(getDealSuccess(res.data))
    })
    .catch((err) => {
        dispatch(getDealError())
    })
}