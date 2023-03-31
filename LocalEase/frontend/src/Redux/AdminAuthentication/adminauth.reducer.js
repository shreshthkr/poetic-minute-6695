import {
    ADMIN_LOGIN_FAILURE,
    ADMIN_LOGIN_REQUEST,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGIN_RESET,
} from "./adminauth.actionTypes";

const AdminTOKEN = localStorage.getItem("admintoken");

const initialState = {
    adminLogin: { loading: false, error: false, message: "" },
    adminRegister: { loading: false, error: false, message: "" },
    adminLogout: { message: "" },
    data: {
        isAuthenticated: false,
        token: AdminTOKEN || null,
    },
};
export default function adminAuthReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADMIN_LOGIN_REQUEST:
            return {
                ...state,
                adminLogin: { loading: true, error: false },
            };
        case ADMIN_LOGIN_SUCCESS:
            localStorage.setItem("admintoken", payload.token);
            return {
                ...state,
                adminLogin: { loading: false, error: false, message: payload.message },
                data: {
                    isAuthenticated: true,
                    token: payload.token,
                },
            };
        case ADMIN_LOGIN_FAILURE:
            return {
                ...state,
                adminLogin: { loading: false, error: true, message: payload.message },
            };

        case ADMIN_LOGIN_RESET:
            localStorage.removeItem("admintoken");
            return {
                ...state,
                adminLogout: { message: "Logout Successfully" },
                data: {
                    isAuthenticated: false,
                    token: null,
                    admin: null,
                },
            };

        default:
            return state;
    }
}