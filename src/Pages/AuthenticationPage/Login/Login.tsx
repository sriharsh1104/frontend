import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import {
  Input,
  PasswordInput,
} from "../../../Components/UI/Formik/FormikFields";
import { AuthCard, CustomButton } from "../../../Components/UI";
import { signIn } from "../../../Api/user.action";
import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { setJwtToken } from "../../../Redux/authenticationData/authenticationData";
import toast from "react-hot-toast";

const Login = () => {
  const dispatch: Dispatch<any> = useDispatch<any>();
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Please Enter Valid Email Address")
      .required("Please Enter Email Address"),
    password: Yup.string().required("Please Enter Password"),
  });
  const onSubmit = async (values: any) => {
    const loginDetails: any = {
      email: values?.email,
      password: values?.password,
    };
    const result: any = await signIn(loginDetails);
    if (result?.status === 200) {
      console.log("result", result);
      dispatch(setJwtToken(result?.token));
      toast.success(result?.message);
      navigate("/dashboard");
    } else {
      toast.error(result?.message);
    }
  };
  return (
    <AuthCard
      isLogo
      title="Login to Admin"
      subtitle="Enter your account details to login"
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
              placeholder="Admin@gmail.com"
              type="email"
              onChange={formik?.handleChange}
              onBlur={formik?.handleBlur}
              value={formik?.values?.email}
              formik={formik}
              name="email"
            />
            <PasswordInput
              label="Password"
              placeholder="#12345%&%$"
              onChange={formik?.handleChange}
              onBlur={formik?.handleBlur}
              value={formik?.values?.password}
              formik={formik}
              name="password"
            />
            <div className="forgot-link">
              <Link to="/forgot-password">Forgot Password</Link>
            </div>
            <CustomButton
              text="Login"
              className="w-100"
              disabled={!formik?.isValid}
            />
            <div className="signup-link">
              <Link to="/signup">Don't have an account? Sign Up</Link>
            </div>
          </Form>
        )}
      </Formik>
    </AuthCard>
  );
};

export default Login;
