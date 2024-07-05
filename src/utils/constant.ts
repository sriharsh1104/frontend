export const API_HOST = "http://10.10.2.13:5000/auth";

interface API_END_POINTS {
  LOGIN: string;
  TRNX_HISTORY: string;
}
export const APIURL: API_END_POINTS = {
  LOGIN: "/login",
  TRNX_HISTORY: "history",
};
