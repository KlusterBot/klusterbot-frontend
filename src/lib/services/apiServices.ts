import { baseUrl, getError } from "../utils";
import { setToken } from "./localStorageServices";

export const login = async (form: { email: string; password: string }) => {
  try {
    const response = await baseUrl.post("/auth/login", form);
    const data = response?.data;
    console.log({ data });
    if (data && data?.data?.accessToken) {
      setToken(data?.data?.accessToken);
    }
    return { data };
  } catch (error) {
    console.log({ error: getError(error) });
    return { error: getError(error) };
  }
};

export const signUp = async (form: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    const response = await baseUrl.post("/auth/register", form);
    const data = response?.data;
    console.log({ data });
    if (data && data?.data?.accessToken) {
      setToken(data?.data?.accessToken);
    }
    return { data: response?.data };
  } catch (error) {
    console.log({ error: getError(error) });
    return { error: getError(error) };
  }
};
