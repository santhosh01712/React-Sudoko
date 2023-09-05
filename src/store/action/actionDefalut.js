import * as actionTypes from "./actionTypes";
import axios from "axios";
import * as utilities from "../../container/Rules/Examples/utility";

export const fetchGameStart = () => {
  return {
    type: actionTypes.FETCH_GAME_START,
  };
};
export const fetchGameSuccess = (resData, levelType, level) => {
  return {
    type: actionTypes.FETCH_GAME_SUCCESS,
    data: resData,
    levelType: levelType,
    level: level,
  };
};
export const fetchGameFailed = (error) => {
  return {
    type: actionTypes.FETCH_GAME_FAILED,
    error: error,
  };
};

export const loadGame = (levelType, level) => {
  return {
    type: actionTypes.LOAD_GAME,
    levelType: levelType,
    level: level,
  };
};

export const fetchGame = (
  callType = "initial",
  levelType = "easy",
  level = 1
) => {
  return (dispatch) => {
    dispatch(fetchGameStart());
    axios
      .get("https://reactsudoku-default-rtdb.firebaseio.com/GameSetup.json")
      .then((res) => {
        callType === "initial"
          ? dispatch(fetchGameSuccess(res.data, levelType, level))
          : dispatch(fetchGameSuccess(res.data, levelType, level));
      })
      .catch((err) => {
        console.log("not fetched");
        console.log(err.response.data);
        dispatch(fetchGameFailed(err));
      });
  };
};

export const handleAnswers = (row, column, value) => {
  return {
    type: actionTypes.HANDLE_ANSWERS,
    row: row,
    column: column,
    value: value,
  };
};

export const presubmitHandler = (newArray) => {
  return {
    type: actionTypes.PRESUBMIT_HANDLER,
    validityArray: newArray,
  };
};

export const refreshGame = (levelType, level) => {
  return (dispatch) => {
    dispatch(fetchGame("refresh", levelType, level));
  };
};

export const calculateScore = () => {
  return {
    type: actionTypes.CALCULATE_SCORE,
  };
};

export const guideTheUser = (targetbox, targetindex, array, value, answer) => {
  let [newArray, message] = utilities.userGuild(
    targetbox,
    targetindex,
    array,
    value,
    answer
  );
  return {
    type: actionTypes.GUIDE_THE_USER,
    validityArray: newArray,
    guideMessage: message,
  };
};
