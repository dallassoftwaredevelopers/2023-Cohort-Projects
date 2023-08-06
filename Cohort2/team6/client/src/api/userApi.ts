/* eslint-disable @typescript-eslint/no-unsafe-return */
import axios from "axios";
import { User } from "../types/User.types";
import { API_URL } from "../constants/api-constants";
import { MSW_URL } from "../constants/api-constants";


const LOGIN_API_URL = `${API_URL}/login`;
const REGISTER_API_URL = `${API_URL}/register`;

export const loginUserAsync = async (
  username: string,
  password: string
): Promise<User> => {
  try {
    const response = await axios.post(LOGIN_API_URL, { username, password });
    return response.data;
  } catch (error) {
    throw new Error("Login failed");
  }
};

export const registerUserAsync = async (
  username: string,
  password: string
): Promise<User> => {
  try {
    const response = await axios.post(REGISTER_API_URL, { username, password });
    return response.data;
  } catch (error) {
    throw new Error("Registration failed");
  }
};
