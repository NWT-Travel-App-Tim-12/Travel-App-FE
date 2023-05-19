import { AuthenticateResponse } from "./interfaces/auth.d";
import { User } from "../models/User";
import axiosInstance from "./axiosInstance";
import { Session } from "../utils/session";
import { SESSION_USER_TOKEN } from "../constants/session";
import { AxiosResponse } from "axios";

const register = async (userData: User) => {
  try {
    const response = await axiosInstance.post("/auth/register", userData);
    const token = response.data.token;
    Session.setUserToken(token);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const authenticate = async (
  userData: User
): Promise<AxiosResponse<AuthenticateResponse> | undefined> => {
  try {
    const response = await axiosInstance.post("/auth/authenticate", userData);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const Auth = {
  register,
  authenticate,
};
