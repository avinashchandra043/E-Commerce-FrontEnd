import axios from "axios";
import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "../ActionTypes/authActionType";
import { store } from "../store";
import { API } from "../Apis/apis";
const { dispatch } = store;

export const getToken = () => {
  return localStorage.getItem("jwt");
};

const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

export const register = async (userData) => {
  dispatch(registerRequest());
  try {
    const response = await axios.post(
      `${API.eCommerceApi}/auth/signup`,
      userData
    );
    const user = response.data;
    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt);
      dispatch(registerSuccess(user.jwt));
      return true;
    }
    return false;
  } catch (err) {
    dispatch(registerFailure(err.message));
    return false;
  }
};

const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

export const login = async (userData) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post(
      `${API.eCommerceApi}/auth/signin`,
      userData
    );
    const user = response.data;
    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt);
      dispatch(loginSuccess(user.jwt));
      return true;
    }
    return false;
  } catch (err) {
    dispatch(loginFailure(err.message));
    return false;
  }
};

const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user });
const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error });

export const getUser = async (jwt) => {
  dispatch(getUserRequest());
  try {
    if (jwt) {
      const response = await axios.get(
        `${API.eCommerceApi}/api/users/profile`,
        {
          headers: { Authorization: `Bearer ${jwt}` },
        }
      );
      const user = response.data;
      dispatch(loginSuccess(jwt));
      dispatch(getUserSuccess(user));
    }
  } catch (err) {
    dispatch(getUserFailure(err.message));
  }
};

export const logout = () => {
  dispatch({ type: LOGOUT, payload: null });
  localStorage.clear();
};
