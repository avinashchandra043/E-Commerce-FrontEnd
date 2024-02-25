import {
  CREATE_PAYMENT_FAILURE,
  CREATE_PAYMENT_REQUEST,
  UPDATE_PAYMENT_FAILURE,
  UPDATE_PAYMENT_REQUEST,
} from "../ActionTypes/paymentActionType";
import { baseApi } from "../Apis/apis";
import { store } from "../store";

const { dispatch } = store;
export const createPayment = async (orderId) => {
  dispatch({ type: CREATE_PAYMENT_REQUEST });
  try {
    const { data } = await baseApi.post(`/api/payments/${orderId}`, {});
    if (data.payment_link_url) {
      window.location.href = data.payment_link_url;
    }
  } catch (err) {
    dispatch({ type: CREATE_PAYMENT_FAILURE, payload: err.message });
  }
};

export const updatePayment = async (reqData) => {
  dispatch({ type: UPDATE_PAYMENT_REQUEST });
  try {
    await baseApi.get(
      `/api/payments?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`
    );
  } catch (err) {
    dispatch({ type: UPDATE_PAYMENT_FAILURE, payload: err.message });
  }
};
