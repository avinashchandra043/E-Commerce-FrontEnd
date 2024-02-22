import axios from "axios";
import { getToken } from "../Action/authAction";

export const API_BASE_URL = "http://localhost:5454";

export const baseApi = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${getToken}`,
    "Content-Type": "application/json",
  },
});
