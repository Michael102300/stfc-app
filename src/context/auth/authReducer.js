import {
  SUCCESSFULL_REGISTRATION,
  ERROR_REGISTRATION,
  GET_USER,
  SUCCESSFULL_LOGIN,
  ERROR_LOGIN,
  LOG_OUT,
} from "../../types";
//eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case SUCCESSFULL_LOGIN:
    case SUCCESSFULL_REGISTRATION:
      return {
        ...state,
        authenticate: true,
        msg: null,
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        authenticate: true,
        user: action.payload,
        loading: false,
      };
    case LOG_OUT:
    case ERROR_LOGIN:
    case ERROR_REGISTRATION:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        authenticate: null,
        msg: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
