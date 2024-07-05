import { UserIcon } from "../../../Assets/Icon/svg/SvgIcons";
import "./UserInfo.scss";

const UserInfo = (props: { className?: string }) => {
  const email = localStorage.getItem("email");
  return (
    <div className={`user-info ${props.className ? props.className : ""}`}>
      <span>
        <UserIcon />
      </span>
      {email}
    </div>
  );
};

export default UserInfo;
