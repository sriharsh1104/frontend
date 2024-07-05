import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { PasswordInput } from "../../../Components/UI/Formik/FormikFields";
import { AuthCard, CustomButton } from "../../../Components/UI";

const ResetPassword = () => {
  const navigate = useNavigate();
  const initialValues = {
    newPassword: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    newPassword: Yup.string().required("Please enter new password"),
    confirmPassword: Yup.string()
      .oneOf(
        [Yup.ref("newPassword")],
        "Enter password does not match with new password"
      )
      .required("Enter password does not match with new password"),
  });
  const onSubmit = (values: any) => {
    navigate("/");
  };
  return (
    <AuthCard
      title="Reset Password"
      subtitle="Set the new password for your account"
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <PasswordInput
              label="New Password"
              placeholder="#56789%&%$"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.newPassword}
              formik={formik}
              name="newPassword"
            />
            <PasswordInput
              label="Confirm Password"
              placeholder="#56789%&%$"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              formik={formik}
              name="confirmPassword"
            />
            <CustomButton text="Reset" className="w-100" onClick={onSubmit} />
          </Form>
        )}
      </Formik>
    </AuthCard>
  );
};

export default ResetPassword;
