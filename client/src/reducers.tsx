import {
  ActionTypes,
  SET_IMAGE,
  SET_NAME,
  SET_LOGIN_STATUS,
  SET_UID,
  SET_BEAR,
  SET_COLOR,
  SET_SENDER,
  SET_MESSAGE,
  SET_STICKER,
  SET_CODE,
} from "./types";
import AppState from "./types";

const initialState: AppState = {
  image: "",
  name: "",
  uid: "",
  isLoggedIn: false,
  //sand
  code: "",
  setbear: "",
  color: "#bcd5fc",
  sender: "",
  message: "",
  sticker: "",
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
    case SET_UID: {
      return {
        ...state,
        uid: action.payload,
      };
    }
    case SET_BEAR: {
      return {
        ...state,
        setbear: action.payload,
      };
    }
    case SET_COLOR: {
      return {
        ...state,
        color: action.payload,
      };
    }
    case SET_SENDER: {
      return {
        ...state,
        sender: action.payload,
      };
    }
    case SET_MESSAGE: {
      return {
        ...state,
        message: action.payload,
      };
    }
    case SET_STICKER: {
      return {
        ...state,
        sticker: action.payload,
      };
    }
    case SET_CODE: {
      return {
        ...state,
        code: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
