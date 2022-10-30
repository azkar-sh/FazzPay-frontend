const initialState = {
  data: {},
};

const history = (state = initialState, action) => {
  switch (action.type) {
    case "GET_HISTORY_DATA_PENDING":
      return {
        ...state,
        data: {},
      };

    case "GET_HISTORY_DATA_FULFILLED":
      return {
        ...state,
        data: action.payload.data.data,
      };

    case "GET_HISTORY_DATA_REJECTED":
      return {
        ...state,
        data: {},
      };

    case "TRANSFER_BALANCE_PENDING":
      return {
        ...state,
        data: {},
      };

    case "TRANSFER_BALANCE_FULFILLED":
      return {
        ...state,
        data: action.payload.data.data,
      };

    case "TRANSFER_BALANCE_REJECTED":
      return {
        ...state,
        data: {},
      };

    default:
      return state;
  }
};

export default history;
