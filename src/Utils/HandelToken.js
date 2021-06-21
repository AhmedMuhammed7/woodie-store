import Axios from "./Axios";
import Cookies from "js-cookie";
import jwt_decode from 'jwt-decode'
export const verifyToken = async () =>
  await Axios("users/token")
    .then((res) => res.data)
    .then((data) => data.type)
    .catch((err) => err.response.data.type);

export const setToken = (token) => {
  Cookies.set("token", JSON.stringify(token));
};

export const token = Cookies.getJSON("token");

export const decodedToken = token && jwt_decode(token)
