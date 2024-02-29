import axios from "axios";



export const API_BASE_URL = "https://crazycart.onrender.com";

export const baseApi = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    "Content-Type": "application/json",
  },
});
