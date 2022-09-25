import Axios, { AxiosInstance } from "axios";

const axios: AxiosInstance = Axios.create({
  baseURL: "http://3.36.160.109:8080/users/sign-up"
});

export interface UserType {
  readonly id: number;
  readonly email: string;
  readonly password: string;
  readonly name: string;
  readonly isDeleted: string;
}

export async function signUp(
  name: string,
  email: string,
  password: string
): Promise<UserType> {
  return await axios
    .post("", {
      name: name,
      email: email,
      password: password
    })
    .then(res => res.data);
}
