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

    default:
      return state;
  }
};
