import {
  GET_DEAL_ERROR,
  GET_DEAL_REQUEST,
  GET_DEAL_SUCCESS,
} from "./actionType";

const initialState = {
  isLoading: false,
  deal: [],
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DEAL_REQUEST:
      return { ...state, isLoading: true };
    case GET_DEAL_SUCCESS:
      return { ...state, isLoading: false, deal: payload };
    case GET_DEAL_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
