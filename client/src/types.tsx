interface AppState {
  image: string;
  name: string;
  uid: string;
  isLoggedIn: boolean;
  setbear: string;
  color: string;
  // send
  sender: string;
  message: any;
  sticker: any;
  code: string;
  firstChoice: string;
  secondChoice: string;
}

export default AppState;

export const SET_IMAGE = "SET_IMAGE";
export const SET_NAME = "SET_NAME";
export const SET_LOGIN_STATUS = "SET_LOGIN_STATUS";
export const SET_UID = "SET_UID";
export const SET_BEAR = "SET_BEAR";
export const SET_COLOR = "SET_COLOR";
export const SET_SENDER = "SET_SENDER";
export const SET_MESSAGE = "SET_MESSAGE";
export const SET_STICKER = "SET_STICKER";
export const SET_CODE = "SET_CODE";
export const SET_FIRSTCHOICE = "SET_FIRSTCHOICE";
export const SET_SECONDCHOICE = "SET_SECONDCHOICE";

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
interface SetUidAction {
  type: typeof SET_UID;
  payload: string;
}
interface SetBearAction {
  type: typeof SET_BEAR;
  payload: string;
}
interface SetColorAction {
  type: typeof SET_COLOR;
  payload: string;
}
interface SetSendAction {
  type: typeof SET_SENDER;
  payload: string;
}
interface SetMessageAction {
  type: typeof SET_MESSAGE;
  payload: any;
}
interface SetStickerAction {
  type: typeof SET_STICKER;
  payload: any;
}
interface SetCodeAction {
  type: typeof SET_CODE;
  payload: any;
}
interface SetFirstAction {
  type: typeof SET_FIRSTCHOICE;
  payload: string;
}
interface SetSecondAction {
  type: typeof SET_SECONDCHOICE;
  payload: string;
}
export type ActionTypes =
  | SetImageAction
  | SetNameAction
  | SetLoginStatusAction
  | SetUidAction
  | SetBearAction
  | SetColorAction
  | SetMessageAction
  | SetSendAction
  | SetStickerAction
  | SetCodeAction
  | SetFirstAction
  | SetSecondAction;
