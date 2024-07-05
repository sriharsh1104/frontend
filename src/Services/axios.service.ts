import axios from "axios";
import { API_HOST } from "../utils/constant";

axios.defaults.baseURL = API_HOST;

let failedQueue: any = [];

const processQueue = (error: any, token = null) => {
  failedQueue.forEach((prom: any) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

/**AXIOS INTERCEPTOR */
axios.interceptors.request.use(
  (config) => {
    // let walletAddress = storeInstance.getState().user.walletAddress;
    config.headers["authorization"] = localStorage.getItem("token");
    config.headers["Content-Type"] = "application/json";
    config.headers["Access-Control-Allow-Origin"] = "*";
    return config;
  },
  (error) => {
    return error;
  }
);

/**HANDLE AXIOS RESPONSE */
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (!error.response) {
      // toaster.error("Server not responding. Please try again later.");
    } else {
      return manageErrorConnection(error);
    }

    const originalRequest = error.config;
    failedQueue.push(originalRequest);
    // CommonService.handleJWTExpiry(error)
    if (error.response.status === 403) {
      processQueue(error, null);
    }
  }
);
/**HANDLE AXIOS ERROR */
function manageErrorConnection(err: any) {
  if (
    err.response &&
    err.response.status >= 400 &&
    err.response.status <= 500
  ) {
    // toaster.error(err.response.data.msg);
    if (err.response.status === 401) {
      //   setTimeout(function () {
      //     store.dispatch(logoutUser());
      //   }, 1000);
    }
    return Promise.reject(err);
  } else if (err.code === "ECONNREFUSED") {
    // toaster.error('ECONNREFUSED');
    return "nevermind";
  } else {
    // toaster.error(err);
    return Promise.reject(err);
  }
}

/**METHOD FOR CALL API */
export const apiCallPost = (
  url: any,
  data: any,
  params = {},
  showtoaster = false
) =>
  new Promise((resolve) => {
    axios
      .post(formatUrl(url, params), data)
      .then((res) => {
        // showtoaster && handleSuccess(res);
        resolve(res.data);
      })
      .catch((error: any) => {
        if (error?.response?.status == 401) {
          window.location.replace("/");
          localStorage.clear();
        }
        resolve(null);
      });
  });

/**METHOD FOR SEND API */
export const apiCallGet = (url: any, params = {}, showtoaster = false) =>
  new Promise((resolve) => {
    axios
      .get(formatUrl(url, params))
      .then((res) => {
        // showtoaster && handleSuccess(res);
        resolve(res.data);
      })
      .catch((error) => {
        resolve(null);
      });
  });
export const formatUrl = (url: any, params: any) => {
  params =
    params && Object.keys(params).length > 0
      ? `?${new URLSearchParams(params).toString()}`
      : ``;
  return `${url}${params}`;
};
