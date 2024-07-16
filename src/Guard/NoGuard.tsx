import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

/**AUTHGAURD FOR OUTER PAGES */
export const WithoutAuth = (props: any) => {
  const accessToken:any = useSelector(
    (state: any) => state?.authenticationDataSlice?.jwtToken
  );
  return !accessToken ? props?.children : <Navigate to="/" />;
};
