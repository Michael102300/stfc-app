import React, { useReducer } from "react";
import ProblemsContext from "./problemContext";
import problemReducer from "./problemReducer";
import clientAxios from "../../api/axiosConfig";

import {
  ADD_PROBLEM,
  GET_PROBLEM,
  CURRENT_PROBLEM,
  ERROR_PROBLEM,
  CLEAN_TASK,
  EDIT_PROBLEM,
  GET_TECHS,
  GET_ALL_USER,
} from "../../types";

const ProblemState = (props) => {
  const initialState = {
    problems: [],
    form: false,
    msg: null,
    errorForm: false,
    currentProblem: null,
    techs: [],
    users: [],
  };

  const [state, dispatch] = useReducer(problemReducer, initialState);

  const getAllProblems = async () => {
    try {
      const res = await clientAxios.get("/api/problems");
      console.log(res);
      dispatch({
        type: GET_PROBLEM,
        payload: res.data,
      });
    } catch (error) {
      const alert = {
        msg: "Hubo un error",
        category: "alerta-error",
      };
      dispatch({
        type: ERROR_PROBLEM,
        payload: alert,
      });
    }
  };

  const getTechs = async () => {
    try {
      const res = await clientAxios.get("/api/techs");
      dispatch({
        type: GET_TECHS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getAllUsers = async () => {
    try {
      const res = await clientAxios.get("/api/users");
      dispatch({
        type: GET_ALL_USER,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const createProblem = async (data) => {
    try {
      const res = await clientAxios.post("/api/problems", data);
      dispatch({
        type: ADD_PROBLEM,
        payload: res.data,
      });
    } catch (error) {
      const alert = {
        msg: "Hubo un error",
        category: "alerta-error",
      };
      dispatch({
        type: ERROR_PROBLEM,
        payload: alert,
      });
    }
  };

  const editProblem = async (data) => {
    try {
      const res = await clientAxios.put(`/api/problems/${data._id}`, data);
      console.log(res);
      dispatch({
        type: EDIT_PROBLEM,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const saveCurrentProblem = (problem) => {
    dispatch({
      type: CURRENT_PROBLEM,
      payload: problem,
    });
  };

  const cleanProblem = () => {
    dispatch({
      type: CLEAN_TASK,
    });
  };

  return (
    <ProblemsContext.Provider
      value={{
        problems: state.problems,
        form: state.form,
        msg: state.mgs,
        errorForm: state.errorForm,
        currentProblem: state.currentProblem,
        techs: state.techs,
        users: state.users,
        editProblem,
        createProblem,
        getAllProblems,
        saveCurrentProblem,
        cleanProblem,
        getTechs,
        getAllUsers,
      }}
    >
      {props.children}
    </ProblemsContext.Provider>
  );
};

export default ProblemState;
