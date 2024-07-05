export const API_HOST = "http://localhost:5000/api";

interface API_END_POINTS {
  LOGIN: string;
  REGISTER: string;
}
export const APIURL: API_END_POINTS = {
  LOGIN: "/users/signin",
  REGISTER: "/users/signup",
};
