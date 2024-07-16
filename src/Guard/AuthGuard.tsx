import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

/**AUTHGAURD FOR INNER PAGES */
export const RequireAuth = (props: any) => {
  const accessToken: any = useSelector(
    (state: any) => state?.authenticationDataSlice?.jwtToken
  );

  return accessToken ? props?.children : <Navigate to="/" />;
};
