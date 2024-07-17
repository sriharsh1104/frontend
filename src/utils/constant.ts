export const API_HOST = "http://localhost:5000/api";

interface API_END_POINTS {
  LOGIN: string;
  REGISTER: string;
  GET_DASHBOARD_BLOG: string;
  GET_USER_SPECIFIED_BLOG: string;
  CREATE_BLOG: string;
  DELETE_BLOG: string;
  UPDATE_BLOG: string;
  LOGOUT: string;
  LIKEPOST: string;
}
export const APIURL: API_END_POINTS = {
  LOGIN: "/users/signin",
  REGISTER: "/users/signup",
  GET_DASHBOARD_BLOG: "/blog/getBlogDashboard",
  GET_USER_SPECIFIED_BLOG: "/blog/getBlogData",
  CREATE_BLOG: "/blog/createBlog",
  DELETE_BLOG: "/blog/deleteBlog",
  LOGOUT: "/users/logout",
  UPDATE_BLOG: "/blog/updateBlog",
  LIKEPOST: "/blog/likePost"
};
