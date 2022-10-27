import axiosClient from "../../utils/axios";

export const getUserData = () => {
  return {
    type: "GET_USER_DATA",
    payload: axiosClient.get(
      "/user?page=1&limit=50&search=&sort=firstName ASC"
    ),
  };
};

export const getUserDataById = (id) => {
  return {
    type: "GET_USER_DATA_BY_ID",
    payload: axiosClient.get(`/user/profile/${id}`),
  };
};
