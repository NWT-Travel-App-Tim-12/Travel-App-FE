import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../../models/User";
import { Auth } from "../../../api/auth";
import { UserStore } from "./interfaces";

export const signUpAction = createAsyncThunk(
  "user/signUp",
  async (userData: User) => await Auth.register(userData)
);

export const logInAction = createAsyncThunk(
  "user/logIn",
  async (userData: User) => await Auth.authenticate(userData)
);

export const logOutAction = () => {
  return {
    isUserLoggedIn: false,
    token: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
  } as unknown as UserStore;
};
