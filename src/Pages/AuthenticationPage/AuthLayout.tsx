import { Link, Outlet, useLocation } from "react-router-dom";
import BackBtn from "../../Components/UI/BackBtn/BackBtn";
import "./AuthLayout.scss";

const AuthLayout = () => {
  const location = useLocation();
  return (
    <main className="auth-page">
      {location.pathname === "/" ? "" : <BackBtn />}
      <div className="auth-page__inner">
        <Outlet />
      </div>
      <footer className="auth-page__footer">
        <Link to="/">Terms & Conditions</Link>
        <span>|</span>
        <Link to="/">Privacy Policy</Link>
      </footer>
    </main>
  );
};

export default AuthLayout;
