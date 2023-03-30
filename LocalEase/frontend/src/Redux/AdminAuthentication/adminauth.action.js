import {
    ADMIN_LOGIN_FAILURE,
    ADMIN_LOGIN_REQUEST,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGIN_RESET
} from "./adminauth.actionTypes.js";
import axios from "axios";

export const ADMINLogin = (data) => async (dispatch) => {
    // console.log("data: ", data);
    try {
        dispatch({ type: ADMIN_LOGIN_REQUEST });

        const res = await axios.post(
            "https://localhost:8080/admin/login",
            data
        );
        console.log("res: ", res);
        if (res.data.token) {
            dispatch({
                type: ADMIN_LOGIN_SUCCESS,
                payload: {
                    token: res.data.token,
                    message: res.data.msg,

                },
            });
        }
        else {
            dispatch({
                type: ADMIN_LOGIN_FAILURE,
                payload: {
                    message: res.data.msg,
                },
            });
        }

    } catch (error) {
        // console.log("error: ", error);

        dispatch({
            type: ADMIN_LOGIN_FAILURE,
            payload: {
                message: error,
            },
        });
    }
};