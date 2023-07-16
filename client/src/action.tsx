import { ActionTypes, SET_IMAGE, SET_NAME, SET_LOGIN_STATUS } from "./types";

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
