import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import "./CustomButton.scss";

const CustomButton = ({
  text,
  onClick,
  className,
  disabled,
  icon,
  role,
  type,
  to,
}: {
  text?: string;
  onClick?: any;
  className?: string;
  disabled?: any;
  icon?: ReactNode;
  role?: string;
  type?: "submit" | "reset" | "button" | undefined;
  to?: any;
}) => {
  const [isPulsating, setPulsating] = useState(false);

  const handleClick = () => {
    setPulsating(true);
    setTimeout(() => {
      setPulsating(false);
    }, 800);
  };
  return (
    <>
      {(() => {
        switch (role) {
          case "link":
            return (
              <Link
                to={to}
                className={`custom-button ${className ? className : ""} ${
                  isPulsating ? "pulse" : ""
                }`}
                onClick={onClick || handleClick}
              >
                {icon ? <span className="btn-icon">{icon}</span> : ""}
                {text}
              </Link>
            );
          default:
            return (
              <button
                disabled={disabled}
                className={`custom-button ${className ? className : ""} ${
                  isPulsating ? "pulse" : ""
                }`}
                onClick={onClick || handleClick}
                type={type}
              >
                {icon ? <span className="btn-icon">{icon}</span> : ""}
                {text}
              </button>
            );
        }
      })()}
    </>
  );
};

export default CustomButton;
