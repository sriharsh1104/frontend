import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { Input } from "../../../Components/UI/Formik/FormikFields";
import {
  AuthCard,
  CustomButton,
  VerifyEmailModal,
} from "../../../Components/UI";
import { useState } from "react";

const ForgotPassword = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  const initialValues = {
    mail: "",
  };

  const validationSchema = Yup.object({
    mail: Yup.string()
      .email("Please enter a right Email Address")
      .required("Please enter email address"),
  });
  const onSubmit = (values: any) => {
    navigate("/reset-password");
  };
  return (
    <AuthCard
      title="Forgot Password"
      subtitle="Enter the email address associated with your account"
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <Input
              label="Email"
              placeholder="Eg”Admin123@gmail.com”"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.mail}
              formik={formik}
              name="mail"
            />
            <CustomButton text="Send" className="w-100" onClick={handleShow} />
          </Form>
        )}
      </Formik>
      <VerifyEmailModal show={show} onHide={handleClose} />
    </AuthCard>
  );
};

export default ForgotPassword;
