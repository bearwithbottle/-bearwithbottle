import {
  ActionTypes,
  SET_IMAGE,
  SET_NAME,
  SET_LOGIN_STATUS,
  SET_UID,
  SET_BEAR,
  SET_COLOR,
  SET_MESSAGE,
  SET_SENDER,
  SET_STICKER,
  SET_CODE,
  SET_SECONDCHOICE,
  SET_FIRSTCHOICE,
  SET_USERID,
} from "./types";

export const setImage = (image: string): ActionTypes => ({
  type: SET_IMAGE,
  payload: image,
});

export const setName = (name: string): ActionTypes => ({
  type: SET_NAME,
  payload: name,
});

export const setLoginStatus = (isLoggedIn: boolean): ActionTypes => ({
  type: SET_LOGIN_STATUS,
  payload: isLoggedIn,
});
export const setUid = (uid: string): ActionTypes => ({
  type: SET_UID,
  payload: uid,
});
export const setBear = (setbear: string): ActionTypes => ({
  type: SET_BEAR,
  payload: setbear,
});
export const setColor = (color: string): ActionTypes => ({
  type: SET_COLOR,
  payload: color,
});
export const setSender = (sender: any): ActionTypes => ({
  type: SET_SENDER,
  payload: sender,
});
export const setMessage = (message: any): ActionTypes => ({
  type: SET_MESSAGE,
  payload: message,
});
export const setSticker = (sticker: any): ActionTypes => ({
  type: SET_STICKER,
  payload: sticker,
});
export const setCode = (code: string): ActionTypes => ({
  type: SET_CODE,
  payload: code,
});
export const setFirst = (firstChoice: string): ActionTypes => ({
  type: SET_FIRSTCHOICE,
  payload: firstChoice,
});
export const setSecond = (secondChoice: string): ActionTypes => ({
  type: SET_SECONDCHOICE,
  payload: secondChoice,
});
export const setUserid = (userid: string): ActionTypes => ({
  type: SET_SECONDCHOICE,
  payload: userid,
});
