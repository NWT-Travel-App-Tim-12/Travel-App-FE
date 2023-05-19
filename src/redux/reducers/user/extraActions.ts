import { Draft, PayloadAction } from "@reduxjs/toolkit";
import { UserStore } from "./interfaces";
/**
 *
 * Sign Up extra reducers
 */
export const signUpPending = (state: Draft<UserStore>) => {
  state.isLoading = true;
  state.error = null;
};
export const signUpFulfilled = (
  state: Draft<UserStore>,
  action: PayloadAction<any>
) => {
  const { authResponse, user } = action.payload.data;
  return {
    ...state,
    isLoading: false,
    token: authResponse.token,
    ...user,
    isUserLoggedIn: true,
  };
};
export const signUpRejected = (
  state: Draft<UserStore>,
  action: PayloadAction<any>
) => {
  state.isLoading = false;
  state.error = "Data is not valid, please try again!";
};

/**
 *
 * Log In extra reducers
 */
export const logInPending = (state: Draft<UserStore>) => {
  state.isLoading = true;
  state.error = null;
};
export const logInFulfilled = (
  state: Draft<UserStore>,
  action: PayloadAction<any>
) => {
  const { authResponse, user } = action.payload.data;
  return {
    ...state,
    isLoading: false,
    token: authResponse.token,
    ...user,
    isUserLoggedIn: true,
  };
};
export const logInRejected = (
  state: Draft<UserStore>,
  action: PayloadAction<any>
) => {
  state.isLoading = false;
  state.error = "Email or password is invalid or you didn't register yet!";
};
