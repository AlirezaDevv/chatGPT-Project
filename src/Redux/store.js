import { createStore } from "redux";

const initialState = {
  promptData: [],
  inputPrompt: "",
  userP: null,
  sidePrompt: null,
  isLoading: false,
  fromInput: false,
  changeLayout: false,
};

const reducer = (state = initialState, action) => {
  if (
    state.promptData.length != 0 &&
    action.type == "PROMPT_REQUEST_SUCCESS" &&
    action.fromInput
  ) {
    state.promptData.length = state.promptData.length - 1;
  }

  switch (action.type) {
    case "PROMPT_REQUEST":
      return {
        ...state,
        userP: action.userP,
        promptData: state.promptData.concat([
          { userPrompt: action.userP, botPrompt: null },
        ]),
        isLoading: action.isLoading,
        inputPrompt: "",
      };

    case "PROMPT_REQUEST_SUCCESS":
      return {
        ...state,
        promptData: state.promptData.concat([
          { userPrompt: state.userP, botPrompt: action.botPrompt },
        ]),
        isLoading: action.isLoading,
      };

    case "CHANGE_INPUT":
      return {
        ...state,
        inputPrompt: action.inputPrompt,
      };

    case "SIDE_CLICK":
      return {
        ...state,
        sidePrompt: action.sidePrompt,
      };

    case "LAYOUT":
      return {
        ...state,
        changeLayout: action.changeLayout
          ? action.changeLayout
          : !state.changeLayout,
      };

    case "RESTART_APP":
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export const store = createStore(reducer);
