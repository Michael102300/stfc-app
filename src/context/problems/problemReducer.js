import {
  ADD_PROBLEM,
  ERROR_PROBLEM,
  EDIT_PROBLEM,
  GET_PROBLEM,
  CURRENT_PROBLEM,
  GET_TECHS,
  GET_ALL_USER,
} from "../../types";
//eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case GET_PROBLEM:
      return {
        ...state,
        problems: action.payload,
      };
    case ADD_PROBLEM:
      return {
        ...state,
        problems: [...state.problems, action.payload],
      };
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
      };
    case GET_ALL_USER:
      return {
        ...state,
        users: action.payload,
      };
    case EDIT_PROBLEM:
      return {
        ...state,
        problems: state.problems.map((problem) =>
          problem._id === action.payload._id ? action.payload : problem
        ),
      };
    case CURRENT_PROBLEM:
      return {
        ...state,
        currentProblem: action.payload,
      };
    case ERROR_PROBLEM:
      return {
        ...state,
        msg: action.payload,
      };
    default:
      return state;
  }
};
