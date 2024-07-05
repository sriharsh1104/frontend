import { useNavigate } from "react-router-dom";
import CustomModal from "../CustomModal";
import CustomButton from "../../CustomButton/CustomButton";
import "./LogoutModal.scss";

const LogoutModal = ({ show, onHide }: { show?: boolean; onHide?: any }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
    localStorage.clear();
  };
  return (
    <CustomModal
      show={show}
      onHide={onHide}
      title="Logout"
      className="logout-modal"
    >
      <p>Are you sure you want to logout?</p>
      <div className="logout-modal__btns">
        <CustomButton text="Cancel" className="outline-btn" onClick={onHide} />
        <CustomButton text="Logout" onClick={() => handleLogout()} />
      </div>
    </CustomModal>
  );
};

export default LogoutModal;
