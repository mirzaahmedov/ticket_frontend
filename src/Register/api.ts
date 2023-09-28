import axios from "axios";

export type TRegisterPayload = {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password: string;
  password1: string;
};

export const registerMutation = async (payload: TRegisterPayload) => {
  const { data } = await axios.post("/user/registration/", payload);
  return data;
};
