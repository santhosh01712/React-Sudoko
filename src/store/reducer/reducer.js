import * as actionTypes from "../action/actionTypes";

const initalStore = {
  dataFetched: false,
  currentGameQuestion: [],
  currentGameAnswer: [],
  validityArray: Array(9).fill(Array(9).fill(true)),
  levelType: "easy",
  level: 1,
  loading: false,
  error: null,
  data: [],
  score: 0,
  successMessage: "",
  guideMessage: (
    <strong className="text-warning">Enter a value at any position</strong>
  ),
};
const reducer = (state = initalStore, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GAME_START:
      return {
        ...state,
        loading: true,
        dataFetched: false,
        error: null,
      };
    case actionTypes.FETCH_GAME_FAILED:
      return {
        ...state,
        dataFetched: false,
        loading: false,
        error: action.error,
      };
    case actionTypes.FETCH_GAME_SUCCESS:
      return {
        ...state,
        dataFetched: true,
        loading: false,
        error: null,
        data: action.data,
        currentGameQuestion:
          action.data[action.levelType][action.level]["question"],
        currentGameAnswer: action.data["easy"][1]["answer"],
      };
    case actionTypes.LOAD_GAME:
      return {
        ...state,
        levelType: action.levelType,
        level: action.level,
        currentGameQuestion: [
          ...state.data[action.levelType][action.level]["question"],
        ],
        currentGameAnswer: [
          ...state.data[action.levelType][action.level]["answer"],
        ],
        successMessage: "",
      };
    case actionTypes.HANDLE_ANSWERS:
      let modifiedArray = [...state.currentGameQuestion];
      modifiedArray[action.row][action.column] = action.value;
      return {
        ...state,
        currentGameQuestion: modifiedArray,
      };
    case actionTypes.PRESUBMIT_HANDLER:
      return {
        ...state,
        validityArray: action.validityArray,
      };
    case actionTypes.REFRESH_GAME:
      return {
        ...state,
        currentGameQuestion: [
          ...state.data[state.levelType][state.level]["question"],
        ],
        currentGameAnswer: [
          ...state.data[state.levelType][state.level]["answer"],
        ],
        validityArray: Array(9).fill(Array(9).fill(true)),
      };
    case actionTypes.CALCULATE_SCORE:
      return {
        ...state,
        score: state.score + 10,
        successMessage: "Completed!!! Next game will be loaded in 3 seconds.",
      };
    case actionTypes.GUIDE_THE_USER:
      return {
        ...state,
        validityArray: action.validityArray,
        guideMessage: action.guideMessage,
      };
    default:
      return state;
  }
};

export default reducer;
