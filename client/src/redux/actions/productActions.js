import axios from "axios";

import { ActionTypes } from "../constants/action-types";

export const fetchAllProducts = () => async (dispatch) => {
  dispatch({ type: ActionTypes.LOAD_DATA });

  try {
    const data = await axios.get("https://dummyjson.com/products");
    dispatch({ type: ActionTypes.FETCH_All_PRODUCTS, payload: data });
  } catch (error) {
    dispatch({ type: ActionTypes.API_ERROR, payload: error.message });
  }
};

export const fetchCategoryProducts = (category) => async (dispatch) => {
  dispatch({ type: ActionTypes.LOAD_DATA });

  try {
    const data = await axios.get(
      `https://dummyjson.com/products/category/${category}`
    );
    dispatch({ type: ActionTypes.FETCH_CATEGORY_PRODUCTS, payload: data });
  } catch (error) {
    dispatch({ type: ActionTypes.API_ERROR, payload: error.message });
  }
};

export const setCurrentPage = (page) => async (dispatch) => {
  dispatch({ type: ActionTypes.SET_CURRENT_PAGE, payload: page });
};

export const sortPrice = () => (dispatch, getState) => {
  const { ProductReducers } = getState();
  dispatch({
    type: ActionTypes.SORT_BY_PRICE,
    payload: ProductReducers.products,
  });
};

export const sortAlpha = () => (dispatch, getState) => {
  const { ProductReducers } = getState();
  dispatch({
    type: ActionTypes.SORT_BY_ALPHABET,
    payload: ProductReducers.products,
  });
};
