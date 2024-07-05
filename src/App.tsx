import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrimaryLayout from "./Components/Layout/PrimaryLayout/PrimaryLayout";
import { AuthLayout, Dashboard, History, Login } from "./Pages";

import { Loader } from "./Components/UI";

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      // {
      //   path: "forgot-password",
      //   element: <ForgotPassword />,
      // },
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
        element: <Dashboard />,
      },

      {
        path: "/history",
        element: <History />,
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
