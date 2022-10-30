import axiosClient from "../../utils/axios";

export const getHistoryData = (page, limit, filter) => {
  return {
    type: "GET_HISTORY_DATA",
    payload: axiosClient.get(
      `transaction/history?page=${page}&limit=${limit}&filter=${filter}`
    ),
  };
};

export const transferBalance = (data) => {
  return {
    type: "TRANSFER_BALANCE",
    payload: axiosClient.post(`/transaction/transfer`, data),
  };
};

// export const topUp = (data) => {
//   return {
//     type: "TOP_UP",
//     payload: axiosClient.post(`/transaction/top-up`, data),
//   };
// };
