import { Link } from "react-router-dom";
import { CloseGradientIcon, MenuIcon } from "../../../Assets/Icon/svg/SvgIcons";
import logo from "../../../Assets/Icon/logo-full.png";
import { CustomSelect } from "../Formik/FormikFields";
import UserInfo from "../UserInfo/UserInfo";
import "./Header.scss";

type propTypes = {
  active?: boolean;
  handleActive?: () => void;
};

const Header = (props: propTypes) => {
  const options = [
    { value: "all", label: "All" },
    { value: "pending", label: "Pending" },
    { value: "done", label: "Done" },
  ];

  return (
    <>
      <header className="header">
        <div className="header__inner">
          <div className="header__inner__actions">
            <Link className="d-xl-none header-logo" to="/dashboard">
              <img className="d-xl-none" src={logo} alt="small-logo" />
            </Link>
            <h5>Welcome to Flash Loan</h5>
          </div>
          <div className="header__inner__actions">
            {/* <CustomSelect
              options={options}
              defaultValue={options[0]}
              isSearchable={false}
            /> */}
            <UserInfo />
            <button
              type="button"
              className={`${props.active ? "active" : ""} d-xl-none ms-3`}
              onClick={props.handleActive}
            >
              {props.active ? <CloseGradientIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
