import axios, { AxiosResponse } from "axios";
import { UserFormData } from "../types/users";

const baseUrl: string = "http://localhost:4000";

export const fetchUsers = async (): Promise<AxiosResponse> => {
  try {
    const users: AxiosResponse = await axios.get(baseUrl + "/users");
    return users;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const createUser = async (
  formData: UserFormData
): Promise<AxiosResponse> => {
  try {
    const users: AxiosResponse = await axios.post(
      baseUrl + "/add-user",
      formData
    );
    return users;
  } catch (error: any) {
    throw new Error(error);
  }
};
