import { ActionTypes, SET_IMAGE, SET_NAME, SET_LOGIN_STATUS } from "./types";
import AppState from "./types";

const initialState: AppState = {
  image: "",
  name: "",
  isLoggedIn: false,
};

const reducer = (state = initialState, action: ActionTypes): AppState => {
  switch (action.type) {
    case SET_IMAGE:
      return {
        ...state,
        image: action.payload,
      };
    case SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case SET_LOGIN_STATUS:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
