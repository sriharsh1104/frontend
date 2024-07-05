import { useNavigate } from "react-router-dom";
import ReactCodeInput from "react-code-input";
import CustomModal from "../CustomModal";
import CustomButton from "../../CustomButton/CustomButton";
import Label from "../../Formik/Label/Label";
import "./VerifyEmailModal.scss";

const VerifyEmailModal = ({
  show,
  onHide,
}: {
  show?: boolean;
  onHide?: any;
}) => {
  const navigate = useNavigate();
  return (
    <>
      <CustomModal
        show={show}
        onHide={onHide}
        title="Verify Your Email"
        closeButton
        className="verify-modal"
      >
        <Label label="Please Enter the 6 Digit Verification Code" />
        <ReactCodeInput
          type="number"
          fields={6}
          name="verificationCode"
          inputMode="numeric"
        />
        <CustomButton
          text="Submit"
          className="w-100"
          onClick={() => navigate("/reset-password")}
        />
        <div className="verify-modal__resend">
          <span>Resend OTP</span>
        </div>
      </CustomModal>
    </>
  );
};

export default VerifyEmailModal;
