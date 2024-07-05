import { ErrorMessage, Field } from "formik";
import Form from "react-bootstrap/Form";
import Label from "../Label/Label";
import { ReactNode } from "react";
import "./Input.scss";

const Input = (props: {
  label?: string;
  name?: any;
  formik?: any;
  children?: ReactNode;
  className?: string;
  type?: string;
  icon?: ReactNode;
  placeholder?: string;
  onChange?: any;
  onBlur?: any;
  value?: any;
  inputClass?: string;
}) => {
  const { ...rest } = props;

  return (
    <>
      <Form.Group
        className={`input ${props.className || ""} ${
          props.formik.values[props.name] ? "input-filled" : ""
        } ${
          props.formik.touched[props.name] && props.formik.errors[props.name]
            ? "input-error"
            : ""
        }`}
        controlId={props.name}
      >
        {props.label && <Label htmlFor={props.name} label={props.label} />}
        <div className="inner">
          <Field
            onChange={props.onChange}
            name={props.name}
            {...rest}
            className={`input-control ${
              props.inputClass ? props.inputClass : ""
            }`}
          />
          {props.icon && <span className="icon">{props.icon}</span>}
        </div>
        {props.children}
        {props.name && <ErrorMessage name={props.name} component={TextError} />}
      </Form.Group>
    </>
  );
};
const TextError = (props: any) => {
  return <div className="error_message">{props.children}</div>;
};
export default Input;
