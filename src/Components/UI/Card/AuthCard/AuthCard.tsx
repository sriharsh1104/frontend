import { ReactNode } from "react";
import logo from "../../../../Assets/Icon/file.png";
import "./AuthCard.scss";

const AuthCard = ({
  children,
  isLogo,
  title,
  subtitle,
}: {
  children?: ReactNode;
  isLogo?: boolean;
  title?: string;
  subtitle?: string;
}) => {
  return (
    <div className="auth-card">
      {isLogo && (
        <div className="auth-card__logo">
          <img src={logo} alt="logo" height={100} width={1000} />
        </div>
      )}
      {(title || subtitle) && (
        <div className="auth-card__head">
          {title && <h3>{title}</h3>}
          {subtitle && <p>{subtitle}</p>}
        </div>
      )}
      <div className="auth-card__body">{children}</div>
    </div>
  );
};

export default AuthCard;
