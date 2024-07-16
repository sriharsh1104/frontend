import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrimaryLayout from "./Components/Layout/PrimaryLayout/PrimaryLayout";
import { AuthLayout, Dashboard, History, Login } from "./Pages";

import { Loader } from "./Components/UI";
import Register from "./Pages/AuthenticationPage/Register/Register";
import MyBlog from "./Pages/MyBlog/MyBlog";
import Blog from "./Pages/CreateBlog/CreateBlog";
import ForgotPassword from "./Pages/AuthenticationPage/ForgotPassword/ForgotPassword";
import { RequireAuth } from "./Guard/AuthGuard";

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/",
        element:  <Login />,
      },
      {
        path: "/signup",
        element: <Register />,
      },

      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      // {
      //   path: "reset-password",
      //   element: <ResetPassword />,
      // },
    ],
  },

  {
    element: <PrimaryLayout />,
    children: [
      {
        path: "/dashboard",
        element: (
          <RequireAuth>
            <Dashboard />,
          </RequireAuth>
        ),
      },

      {
        path: "/createBlog",
        element: (
          <RequireAuth>
            <Blog />,
          </RequireAuth>
        ),
      },
      {
        path: "/myBlog",
        element: (
          <RequireAuth>
            <MyBlog />,
          </RequireAuth>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <Suspense
      fallback={
        <>
          <Loader />
        </>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
