const initialState = {
  data: {},
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_DATA_PENDING":
      return {
        ...state,
        data: {},
      };

    case "GET_USER_DATA_FULFILLED":
      return {
        ...state,
        data: action.payload.data.data,
      };

    case "GET_USER_DATA_REJECTED":
      return {
        ...state,
        data: {},
      };

    case "GET_USER_DATA_BY_ID_PENDING":
      return {
        ...state,
        data: {},
      };

    case "GET_USER_DATA_BY_ID_FULFILLED":
      return {
        ...state,
        data: action.payload.data.data,
      };

    case "GET_USER_DATA_BY_ID_REJECTED":
      return {
        ...state,
        data: {},
      };

    case "GET_USER_BALANCE_PENDING":
      return {
        ...state,
        data: {},
      };

    case "GET_USER_BALANCE_REJECTED":
      return {
        ...state,
        data: {},
      };

    case "GET_USER_BALANCE_FULFILLED":
      return {
        ...state,
        data: action.payload.data.data,
      };

    case "UPDATE_USER_IMAGE_PENDING":
      return {
        ...state,
        data: {},
      };

    case "UPDATE_USER_IMAGE_REJECTED":
      return {
        ...state,
        data: {},
      };

    case "UPDATE_USER_IMAGE_FULFILLED":
      return {
        ...state,
        data: action.payload.data.data,
      };

    case "CHECK_PIN_PENDING":
      return {
        ...state,
        data: {},
      };

    case "CHECK_PIN_REJECTED":
      return {
        ...state,
        data: {},
      };

    case "CHECK_PIN_FULFILLED":
      return {
        ...state,
        data: action.payload.data.data,
      };

    case "UPDATE_PIN_PENDING":
      return {
        ...state,
        data: {},
      };

    case "UPDATE_PIN_REJECTED":
      return {
        ...state,
        data: {},
      };

    case "UPDATE_PIN_FULFILLED":
      return {
        ...state,
        data: action.payload.data.data,
      };

    case "DELETE_USER_IMAGE_PENDING":
      return {
        ...state,
        data: {},
      };

    case "DELETE_USER_IMAGE_REJECTED":
      return {
        ...state,
        data: {},
      };

    case "DELETE_USER_IMAGE_FULFILLED":
      return {
        ...state,
        data: action.payload.data.data,
      };

    case "UPDATE_USER_PASSWORD_PENDING":
      return {
        ...state,
        data: {},
      };

    case "UPDATE_USER_PASSWORD_REJECTED":
      return {
        ...state,
        data: {},
      };

    case "UPDATE_USER_PASSWORD_FULFILLED":
      return {
        ...state,
        data: action.payload.data.data,
      };

    case "UPDATE_PHONE_PENDING":
      return {
        ...state,
        data: {},
      };

    case "UPDATE_PHONE_REJECTED":
      return {
        ...state,
        data: {},
      };

    case "UPDATE_PHONE_FULFILLED":
      return {
        ...state,
        data: action.payload.data.data,
      };

    default:
      return state;
  }
};

export default user;
