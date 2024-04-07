import {
  ADD_ITEM_TO_CART_FAILURE,
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  REMOVE_CART_ITEM_FAILURE,
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM_FAILURE,
  UPDATE_CART_ITEM_REQUEST,
  UPDATE_CART_ITEM_SUCCESS,
} from "../ActionTypes/cartActionType";
import { baseApi } from "../Apis/apis";
import { store } from "../store";
const { dispatch } = store;

export const getCart = async () => {
  dispatch({ type: GET_CART_REQUEST });
  try {
    const { data } = await baseApi.get(`/api/cart/`);
    dispatch({ type: GET_CART_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: GET_CART_FAILURE, payload: err.message });
  }
};

export const addItemToCart = async (reqData) => {
  dispatch({ type: ADD_ITEM_TO_CART_REQUEST });

  try {
    const { data } = await baseApi.put(`/api/cart/add`, reqData);
    dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: err.message });
  }
};

export const removeCartItem = async (cartItemId) => {
  dispatch({ type: REMOVE_CART_ITEM_REQUEST });
  try {
    await baseApi.delete(`/api/cart_items/${cartItemId}`);
    dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: cartItemId });
  } catch (err) {
    dispatch({ type: REMOVE_CART_ITEM_FAILURE, payload: err.message });
  }
};

export const updateCartItem = async (reqData) => {
  dispatch({ type: UPDATE_CART_ITEM_REQUEST });
  try {
    const { data } = await baseApi.put(
      `/api/cart_items/${reqData.cartItemId}`,
      reqData.data
    );
    dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: err.message });
  }
};
