import {legacy_createStore, applyMiddleware, combineReducers} from "redux";
import { reducer as productReducer } from "./Product/reducer";
import { reducer as dealReducer } from "./Deals/reducer";
import { reducer as cartReducer } from "./Cart/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    productReducer,
    dealReducer,
    cartReducer
});



export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));