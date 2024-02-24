import { baseApi } from "../Apis/apis";
import {
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_ORDER_BY_ID_FAILURE,
  GET_ORDER_BY_ID_REQUEST,
  GET_ORDER_BY_ID_SUCCESS,
} from "../ActionTypes/orderActionType";
import { store } from "../store";

const { dispatch } = store;
export const createOrder = async (reqData) => {
  dispatch({ type: CREATE_ORDER_REQUEST });
  try {
    const { data } = await baseApi.post(`/api/orders/`, reqData.address);
    if (data._id) {
      reqData.navigate({ search: `step=3&order_id=${data._id}` });
    }
    dispatch({
      type: CREATE_ORDER_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({ type: CREATE_ORDER_FAILURE, payload: err.message });
  }
};

export const getOrderById = async (orderId) => {
  dispatch({ type: GET_ORDER_BY_ID_REQUEST });
  const { data } = await baseApi.get(`/api/orders/${orderId}`);
  dispatch({ type: GET_ORDER_BY_ID_SUCCESS, payload: data });
  try {
  } catch (err) {
    dispatch({ type: GET_ORDER_BY_ID_FAILURE, payload: err.message });
  }
};
