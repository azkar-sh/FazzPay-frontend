import axiosClient from "../../utils/axios";

export const getHistoryData = (page, limit, filter) => {
  return {
    type: "GET_HISTORY_DATA",
    payload: axiosClient.get(
      `transaction/history?page=${page}&limit=${limit}&filter=${filter}`
    ),
  };
};
