import { useState } from "react";
import { EyeCloseIcon, EyeIcon } from "../../../../Assets/Icon/svg/SvgIcons";
import Input from "./Input";
import "./Input.scss";

const PasswordInput = (props: any) => {
  const { ...rest } = props;
  const [show, setShow] = useState(false);

  const pswdToggle = () => {
    setShow(!show);
  };
  return (
    <>
      <Input
        className="password-input"
        {...rest}
        type={`${show ? "text" : "password"}`}
        icon={
          <button type="button" onClick={pswdToggle}>
            {show ? <EyeCloseIcon /> : <EyeIcon />}
          </button>
        }
      />
    </>
  );
};

export default PasswordInput;
