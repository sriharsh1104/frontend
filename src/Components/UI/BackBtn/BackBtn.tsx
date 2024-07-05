import { useNavigate } from "react-router-dom";
import { BackIcon } from "../../../Assets/Icon/svg/SvgIcons";
import "./BackBtn.scss";

const BackBtn = () => {
  let navigate = useNavigate();
  return (
    <button className="back-btn" onClick={() => navigate(-1)}>
      <BackIcon />
      Back
    </button>
  );
};

export default BackBtn;
