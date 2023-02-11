import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [],
  page: 1,
};

export const ProductReducers = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_DATA:
      return {
        ...state,
        loading: true,
      };

    case ActionTypes.FETCH_All_PRODUCTS:
      return {
        ...state,
        loading: false,
        products: action.payload.data.products,
        category: "",
        page: 1,
      };

    case ActionTypes.SET_CURRENT_PAGE:
      return {
        ...state,
        page: action.payload,
      };

    case ActionTypes.API_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.FETCH_CATEGORY_PRODUCTS:
      return {
        ...state,
        loading: false,
        products: action.payload.data.products,
        page: 1,
        category: action.payload.data.products[0].category,
      };

    case ActionTypes.SORT_BY_PRICE:
      const sortPrice = action.payload.sort((a, b) =>
        a.price > b.price ? 1 : a.price < b.price ? -1 : 0
      );
      return {
        ...state,
        products: sortPrice,
      };

    case ActionTypes.SORT_BY_ALPHABET:
      const sortAlpha = action.payload.sort((a, b) =>
        a.title > b.title ? 1 : a.title < b.title ? -1 : 0
      );
      return {
        ...state,
        products: sortAlpha,
      };

    default:
      return state;
  }
};
