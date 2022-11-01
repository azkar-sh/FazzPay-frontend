import axiosClient from "../../utils/axios";

export const getUserData = (search) => {
  return {
    type: "GET_USER_DATA",
    payload: axiosClient.get(
      `/user?page=1&limit=50&search=${search}&sort=firstName ASC`
    ),
  };
};

export const getUserDataById = (id) => {
  return {
    type: "GET_USER_DATA_BY_ID",
    payload: axiosClient.get(`/user/profile/${id}`),
  };
};

export const getUserBalance = (id) => {
  return {
    type: "GET_USER_BALANCE",
    payload: axiosClient.get(`/dashboard/${id}`),
  };
};

export const updateUserImage = (id, data) => {
  return {
    type: "UPDATE_USER_IMAGE",
    payload: axiosClient.patch(`/user/image/${id}`, data),
  };
};

export const checkPIN = (data) => {
  return {
    type: "CHECK_PIN",
    payload: axiosClient.get(`/user/pin/${data}`),
  };
};

export const updatePIN = (id, data) => {
  return {
    type: "UPDATE_PIN",
    payload: axiosClient.patch(`/user/pin/${id}`, data),
  };
};

export const deleteImageUser = (id) => {
  return {
    type: "DELETE_USER_IMAGE",
    payload: axiosClient.delete(`/user/image/${id}`),
  };
};

export const updateUserPassword = (id, data) => {
  return {
    type: "UPDATE_USER_PASSWORD",
    payload: axiosClient.patch(`/user/password/${id}`, data),
  };
};

export const updatePhone = (id, data) => {
  return {
    type: "UPDATE_PHONE",
    payload: axiosClient.patch(`/user/profile/${id}`, data),
  };
};
