/* eslint-disable @typescript-eslint/no-unsafe-return */
import axios from "axios";
import { User } from "../types/User.types";

const LOGIN_API_URL = "api/url";

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
