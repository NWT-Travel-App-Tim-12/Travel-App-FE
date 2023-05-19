import { SESSION_USER_TOKEN } from "../constants/session";

const getUserToken = () => window.sessionStorage.getItem(SESSION_USER_TOKEN);

const setUserToken = (token: string) =>
  window.sessionStorage.setItem(SESSION_USER_TOKEN, token);

const clear = () => window.sessionStorage.clear();

export const Session = {
  getUserToken,
  setUserToken,
  clear,
};
