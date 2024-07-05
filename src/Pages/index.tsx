import { lazy } from "react";

// auth pages
const AuthLayout = lazy(() => import("./AuthenticationPage/AuthLayout"));
const Login = lazy(() => import("./AuthenticationPage/Login/Login"));
// const ForgotPassword = lazy(
//   () => import("./AuthenticationPage/ForgotPassword/ForgotPassword")
// );
// const ResetPassword = lazy(
//   () => import("./AuthenticationPage/ResetPassword/ResetPassword")
// );

// private pages
const Dashboard = lazy(() => import("./Dashboard/Dashboard"));
const History = lazy(() => import("./History/History"));

export { AuthLayout, Login, Dashboard, History };
