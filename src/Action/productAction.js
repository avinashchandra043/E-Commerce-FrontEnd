import { baseApi } from "../Apis/apis";
import {
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCT_FAILURE,
  FIND_PRODUCT_REQUEST,
  FIND_PRODUCT_SUCCESS,
} from "../ActionTypes/productActionType";
import { store } from "../store";
const { dispatch } = store;

export const findProducts = async (reqData) => {
  dispatch({ type: FIND_PRODUCT_REQUEST });
  const {
    colors,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    category,
    stock,
    sort,
    pageNumber,
    pageSize,
  } = reqData;
  try {
    const { data } = await baseApi.get(
      `/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`
    );
    console.log(">>>>productData", data);
    dispatch({ type: FIND_PRODUCT_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: FIND_PRODUCT_FAILURE, payload: err.message });
  }
};

export const findProductsById = async (reqData) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
  const { productId } = reqData;
  try {
    const data = await baseApi.get(`/api/products/id/${productId}`);
    dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: err.message });
  }
};
