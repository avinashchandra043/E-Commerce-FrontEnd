import axios from "axios";

const PROD = "PROD";
const DEV = "DEV";
const currentEnvironment = PROD;

const Api = {
  PROD: {
    eCommerceApi: "https://crazycart.onrender.com",
  },
  DEV: {
    eCommerceApi: "http://localhost:5454",
  },
};

const getApiUrls = (enviroment = currentEnvironment) => {
  switch (enviroment) {
    case DEV:
      return Api.DEV;
    case PROD:
      return Api.PROD;
    default:
      return Api.DEV;
  }
};

export const API = getApiUrls(currentEnvironment);

export const baseApi = axios.create({
  baseURL: API.eCommerceApi,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    "Content-Type": "application/json",
  },
});
