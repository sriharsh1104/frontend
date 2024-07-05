import axios from "axios";
import { API_HOST } from "../utils/constant";
import toast from "react-hot-toast";
import { formatUrl } from "./Helpers/common.services";
// import { formatUrl } from "./Helpers/common.services";
// import { API_HOST } from "../constant";
// import toast from "react-hot-toast";

axios.defaults.baseURL = API_HOST;

export const RESPONSES: any = {
  SUCCESS: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NOCONTENT: 204,
  BADREQUEST: 400,
  UN_AUTHORIZED: 401,
  INVALID_REQ: 422,
  FORBIDDEN: 403,
  NOTFOUND: 404,
  TIMEOUT: 408,
  TOOMANYREQ: 429,
  INTERNALSERVER: 500,
  BADGATEWAYS: 502,
  SERVICEUNAVILABLE: 503,
  GATEWAYTIMEOUT: 504,
};

let isServerDown = false; // Flag to track server status

// axios request interceptor
axios.interceptors.request.use(
  (config: any) => {
    return config;
  },
  (error: any) => {
    return error;
  }
);

// axios response interceptor
axios.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    // if (error?.response?.status === 401) {
    //   localStorage.clear();
    //   window.location.replace("/");
    // }
    console.log("error", error);
    if (!error.response) {
      // Server is down or no response received
      isServerDown = true; // Set the flag to true when server is down
      toast.error("Server is currently unreachable. Please try again later."); // This line displays a toaster message
    }
    return error.response;
  }
);

/* HANDLE AXIOS SUCCESS */
function handleSuccess(res: any) {
  if (!isServerDown) {
    if (
      res?.status === RESPONSES.SUCCESS ||
      res?.status === RESPONSES.CREATED
    ) {
      res?.data?.message && toast.success(res?.data?.message);
    } else if (res?.data?.message === "Bad Request") {
      res?.data?.message && toast.error("Invalid user");
    } else {
      res?.data?.message && toast.error(res?.data?.message);
    }
  }
}

/* METHOD FOR POST API */
export const apiCallPost = (
  url: any,
  data: any,
  params = {},
  showtoaster: any,
  headers = {}
) =>
  new Promise((resolve) => {
    axios
      .post(formatUrl(url, params), data, {
        headers: headers,
      })
      .then((res) => {
        showtoaster && handleSuccess(res);
        resolve(res?.data);
      })
      .catch((error) => {
        resolve(null);
      });
  });

/* METHOD FOR PUT API */
export const apiCallPut = (
  url: any,
  data: any,
  params = {},
  showtoaster: any,
  headers = {}
) =>
  new Promise((resolve) => {
    axios
      .put(formatUrl(url, params), data, {
        headers: headers,
      })
      .then((res) => {
        showtoaster && handleSuccess(res);
        resolve(res?.data);
      })
      .catch((error) => {
        resolve(null);
      });
  });

/* METHOD FOR PATCH API */
export const apiCallPatch = (
  url: any,
  data: any,
  params = {},
  showtoaster: any,
  headers = {}
) =>
  new Promise((resolve) => {
    axios
      .patch(formatUrl(url, params), data, {
        headers: headers,
      })
      .then((res) => {
        showtoaster && handleSuccess(res);
        resolve(res?.data);
      })
      .catch((error) => {
        resolve(null);
      });
  });

/* METHOD FOR GET API */
export const apiCallGet = (
  url: any,
  params = {},
  showtoaster = false,
  headers = {}
) =>
  new Promise((resolve) => {
    axios
      .get(formatUrl(url, params), {
        headers: headers,
      })
      .then((res) => {
        showtoaster && handleSuccess(res);
        resolve(res?.data);
      })
      .catch((error) => {
        resolve(null);
      });
  });

/* METHOD FOR DELETE API */
export const apiCallDelete = (
  url: any,
  params = {},
  showtoaster = false,
  headers = {}
) =>
  new Promise((resolve) => {
    axios
      .delete(formatUrl(url, params), {
        headers: headers,
      })
      .then((res) => {
        showtoaster && handleSuccess(res);
        resolve(res?.data);
      })
      .catch((error) => {
        resolve(null);
      });
  });