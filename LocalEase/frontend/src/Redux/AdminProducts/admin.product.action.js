import axios from "axios";
import {
  GET_PRODUCTS_LOADING,
  GET_PRODUCT_SUCCESS,
  ADD_PRODUCTS,
  UPDATE_PRODUCTS,
  REMOVE_PRODUCTS
} from "./admin.products.actionTypes";

const token = localStorage.getItem("admintoken");


export const addData = (newdata) => async (dispatch) => {
    console.log("adddata", newdata);
    dispatch({ type: ADD_PRODUCTS });
    try {
      let data = await fetch(`https://localhost:8080/products/add`, {
        method: "POST",
        body: JSON.stringify(newdata),
  
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }); 
      await data.json()
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  export const updateData = (id,newData) => async (dispatch) => {
    console.log("updatedata", id);
    dispatch({ type: UPDATE_PRODUCTS });
    try {
      let data = await fetch(`https://localhost:8080/products/update/${id}`, {
        method: "PATCH",
        body: JSON.stringify(newData),
  
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }); 
      await data.json()
      dispatch(getData("",""))
      console.log("Update successfully",data);
    } catch (e) {
      console.log(e);
    }
  };
  
  
  export const removeData = (id) => async (dispatch) => {
  console.log("Delete action called")
    dispatch({ type: REMOVE_PRODUCTS });
    try {
      let data = await fetch(
        `https://localhost:8080/products/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      await data.json();
      dispatch(getData("", ""));
      console.log("DELETED successfully", data);
    } catch (e) {
      console.log(e);
    }
  };