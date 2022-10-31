const initialState = {
  data: {},
  isLogin: false,
  message: "",
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_PENDING":
      return {
        ...state,
        data: {},
        isLogin: false,
        message: "Loading...",
      };

    case "LOGIN_REJECTED":
      return {
        ...state,
        data: {},
        isLogin: false,
        message: action.payload.reponse.data.msg,
      };

    case "LOGIN_FULFILLED":
      return {
        ...state,
        data: action.payload.data.data,
        isLogin: true,
        message: action.payload.data.msg,
      };

    case "LOGOUT_PENDING":
      return {
        ...state,
        data: {},
        isLogin: true,
        message: "Loading...",
      };

    case "LOGOUT_REJECTED":
      return {
        ...state,
        data: {},
        isLogin: true,
        message: action.payload.reponse.data.msg,
      };

    case "LOGOUT_FULFILLED":
      return {
        ...state,
        data: action.payload.data.data,
        isLogin: false,
        message: action.payload.data.msg,
      };
    default:
      return state;
  }
};
