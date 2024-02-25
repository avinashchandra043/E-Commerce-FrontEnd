import {
  CREATE_PAYMENT_FAILURE,
  CREATE_PAYMENT_REQUEST,
  UPDATE_PAYMENT_FAILURE,
  UPDATE_PAYMENT_REQUEST,
} from "../ActionTypes/paymentActionType";

const initialState = {
  error: null,
  loading: false,
};

export const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PAYMENT_REQUEST:
    case UPDATE_PAYMENT_REQUEST:
      return { ...state, loading: true, error: null };
    case CREATE_PAYMENT_FAILURE:
    case UPDATE_PAYMENT_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
