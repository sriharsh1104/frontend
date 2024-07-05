import store from "../Redux/store";
import { apiCallGet, apiCallPost } from "../Services/axios.service";
import { APIURL } from "../utils/constant";

export const signIn = async (data: any): Promise<any> => {
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
    );
    return result;
  } catch (error) {
    console.log("error login", error);
    throw error;
  }
};
export const signUp = async (data: any): Promise<any> => {
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
    );
    return result;
  } catch (error) {
    console.log("error register", error);
    throw error;
  }
};

export const dashboardBlog = async (): Promise<any> => {
  const accessToken = store?.getState()?.authenticationDataSlice?.jwtToken;

  const headers = {
    "Content-Type": "application/json",
    Authorization: `${accessToken}`,
  };
  try {
    let result: any = await apiCallGet(
      APIURL["GET_DASHBOARD_BLOG"],
      {},
      false,
      headers
    );
    return result;
  } catch (error) {
    console.log("error register", error);
    throw error;
  }
};

export const userSpecifiedBlog = async (): Promise<any> => {
  const accessToken = store?.getState()?.authenticationDataSlice?.jwtToken;

  const headers = {
    "Content-Type": "application/json",
    Authorization: `${accessToken}`,
  };
  console.log("accessToken", accessToken);
  try {
    let result: any = await apiCallGet(
      APIURL["GET_USER_SPECIFIED_BLOG"],
      {},
      false,
      headers
    );
    return result;
  } catch (error) {
    console.log("error register", error);
    throw error;
  }
};

export const createBlog = async (data: any): Promise<any> => {
  const accessToken = store?.getState()?.authenticationDataSlice?.jwtToken;

  const headers = {
    "Content-Type": "application/json",
    Authorization: `${accessToken}`,
  };
  console.log("accessToken", accessToken);
  const { title, description } = data;

  try {
    let result: any = await apiCallPost(
      APIURL["CREATE_BLOG"],
      {
        title: title,
        description: description,
      },
      {},
      false,
      headers
    );
    return result;
  } catch (error) {
    console.log("error register", error);
    throw error;
  }
};

export const deleteBlog = async (data: any): Promise<any> => {
  const accessToken = store?.getState()?.authenticationDataSlice?.jwtToken;

  const headers = {
    "Content-Type": "application/json",
    Authorization: `${accessToken}`,
  };
  console.log("accessToken", accessToken);
  const { id } = data;

  try {
    let result: any = await apiCallPost(
      APIURL["DELETE_BLOG"],
      {
        id: id,
      },
      {},
      false,
      headers
    );
    return result;
  } catch (error) {
    console.log("error register", error);
    throw error;
  }
};

export const updateBlog = async (data: any): Promise<any> => {
  const accessToken = store?.getState()?.authenticationDataSlice?.jwtToken;

  const headers = {
    "Content-Type": "application/json",
    Authorization: `${accessToken}`,
  };
  console.log("accessToken", accessToken);
  const { title, description } = data;

  try {
    let result: any = await apiCallPost(
      APIURL["DELETE_BLOG"],
      {
        title: title,
        description: description,
      },
      {},
      false,
      headers
    );
    return result;
  } catch (error) {
    console.log("error register", error);
    throw error;
  }
};
