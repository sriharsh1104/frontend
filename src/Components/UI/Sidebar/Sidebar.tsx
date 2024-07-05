import { useState } from "react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import {
  DashboardIcon,
  HistoryIcon,
  LogoutIcon,
} from "../../../Assets/Icon/svg/SvgIcons";
import logo from "../../../Assets/Icon/logo-full.png";
import LogoutModal from "../Modal/LogoutModal/LogoutModal";
import CustomButton from "../CustomButton/CustomButton";
import UserInfo from "../UserInfo/UserInfo";
import "./Sidebar.scss";

type propTypes = {
  active?: boolean;
  handleActive?: () => void;
};
const Sidebar = (props: propTypes) => {
  const links = [
    {
      icon: <DashboardIcon />,
      text: "Dashboard",
      link: "/dashboard",
    },
    {
      icon: <HistoryIcon />,
      text: "History",
      link: "/history",
    },
  ];

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        onClick={props.handleActive}
        className={`overlay ${props.active ? "active" : ""} d-xl-none`}
      />
      <motion.div
        className="sidebar_bg"
        animate={{
          ...(props.active
            ? {
                width: window.screen.availWidth < 575 ? "100%" : "350px",
                borderRadius: "0",
              }
            : {
                width: "0",
                borderRadius: "0 100% 100% 0",
              }),
        }}
        transition={{
          type: "tween",
          duration: props.active ? 0.8 : 0.3,
          ease: !props.active ? "backIn" : "backOut",
        }}
      />
      <motion.aside
        className="sidebar"
        animate={{
          transform: props.active ? "translateX(0)" : "translateX(-100%)",
        }}
        transition={{
          type: "spring",
          duration: 0.2,
        }}
      >
        <Link
          to="/dashboard"
          className="sidebar__logo"
          onClick={props.handleActive}
        >
          <img src={logo} alt="logo" height={30} />
        </Link>
        <div className="sidebar__inner">
          <ul className="sidebar__inner__top">
            {links.map((item) => (
              <li key={item.link}>
                <NavLink to={item.link} onClick={props.handleActive}>
                  <span>{item.icon}</span>
                  {item.text}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="sidebar__inner__bottom">
            <UserInfo className="d-md-none" />
            <CustomButton
              onClick={handleShow}
              className="secondary-btn"
              icon={<LogoutIcon />}
              text="Logout"
            />
          </div>
        </div>
      </motion.aside>
      <LogoutModal show={show} onHide={handleClose} />
    </>
  );
};

export default Sidebar;
