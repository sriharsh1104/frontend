import store from "../Redux/store";
import { apiCallPost } from "../Services/axios.service";
import { APIURL } from "../utils/constant";

export const signIn = async (data: any): Promise<any> => {
  // const accessToken = store?.getState()?.authenticationDataSlice?.jwtToken;

  // const headers = {
  //   "Content-Type": "application/json",
  //   "x-auth-token": `${accessToken}`,
  // };
  const { email, password } = data;
  try {
    let result: any = await apiCallPost(
      APIURL["LOGIN"],
      {
        email: email,
        password: password,
      },
      {},
      false
      // headers
    );
    return result;
  } catch (error) {
    console.log("error login", error);
    throw error;
  }
};
export const signUp = async (data: any): Promise<any> => {
  // const accessToken = store?.getState()?.authenticationDataSlice?.jwtToken;

  // const headers = {
  //   "Content-Type": "application/json",
  //   "x-auth-token": `${accessToken}`,
  // };
  const { email, password, username } = data;
  try {
    let result: any = await apiCallPost(
      APIURL["REGISTER"],
      {
        email: email,
        password: password,
        username: username,
      },
      {},
      false
      // headers
    );
    return result;
  } catch (error) {
    console.log("error register", error);
    throw error;
  }
};
