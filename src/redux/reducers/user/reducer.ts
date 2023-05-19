import { logInAction, logOutAction, signUpAction } from "./actions";
import { createSlice } from "@reduxjs/toolkit";
import { UserStore } from "./interfaces";
import {
  signUpPending,
  signUpFulfilled,
  signUpRejected,
  logInFulfilled,
  logInPending,
  logInRejected,
} from "./extraActions";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isUserLoggedIn: false,
    token: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  } as UserStore,
  reducers: {
    logOut: logOutAction,
  },
  extraReducers: (builder) => {
    builder.addCase(signUpAction.pending, signUpPending);
    builder.addCase(signUpAction.fulfilled, signUpFulfilled);
    builder.addCase(signUpAction.rejected, signUpRejected);

    builder.addCase(logInAction.pending, logInPending);
    builder.addCase(logInAction.fulfilled, logInFulfilled);
    builder.addCase(logInAction.rejected, logInRejected);
  },
});

export const { logOut } = userSlice.actions;
export { logInAction as logIn, signUpAction as signUp };
export default userSlice;
