import Axios, { AxiosInstance } from "axios";

const axios: AxiosInstance = Axios.create({
  baseURL: "http://3.36.160.109:8080/users/sign-in"
});

export interface UserType {
  readonly id: number;
  readonly email: string;
  readonly password: string;
  readonly name: string;
  readonly isDeleted: string;
}

export interface AuthType {
  readonly accessJwt: string;
  readonly user: UserType;
}

export async function signIn(
  email: string,
  password: string
): Promise<AuthType> {
  return await axios
    .post("", {
      email: email,
      password: password
    })
    .then(res => res.data);
}
