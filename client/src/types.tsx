interface AppState {
  image: string;
  name: string;
  isLoggedIn: boolean;
}

export default AppState;

export const SET_IMAGE = "SET_IMAGE";
export const SET_NAME = "SET_NAME";
export const SET_LOGIN_STATUS = "SET_LOGIN_STATUS";

interface SetImageAction {
  type: typeof SET_IMAGE;
  payload: string;
}

interface SetNameAction {
  type: typeof SET_NAME;
  payload: string;
}

interface SetLoginStatusAction {
  type: typeof SET_LOGIN_STATUS;
  payload: boolean;
}

export type ActionTypes = SetImageAction | SetNameAction | SetLoginStatusAction;
