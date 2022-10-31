import axiosClient from "../../utils/axios";

export const login = (data) => {
  return {
    type: "LOGIN",
    payload: axiosClient.post("/auth/login", data),
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
    payload: axiosClient.post(`/auth/logout`),
  };
};
