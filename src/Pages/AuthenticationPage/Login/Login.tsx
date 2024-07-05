import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import {
  Input,
  PasswordInput,
} from "../../../Components/UI/Formik/FormikFields";
import { AuthCard, CustomButton } from "../../../Components/UI";
import { apiCallPost } from "../../../ApiService/axios.service";
import { APIURL } from "../../../utils/constant";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const navigate = useNavigate();
  const initialValues = {
    mail: "",
    password: "",
  };

  const validationSchema = Yup.object({
    mail: Yup.string()
      .email("Please enter a right Email Address")
      .required("Please enter email address"),
    password: Yup.string().required("Please enter password"),
  });
  const onSubmit = async (values: any) => {
    const { token, status }: any = await apiCallPost(APIURL["LOGIN"], {
      email: values.mail,
      password: values.password,
    });
    if (status == 200) {
      localStorage.setItem("token", token);
      const { email }: { email: string } = jwtDecode(token);
      localStorage.setItem("email", email);
      navigate("/dashboard");
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
              placeholder="Eg”Admin123@gmail.com”"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.mail}
              formik={formik}
              name="mail"
            />
            <PasswordInput
              label="Password"
              placeholder="#12345%&%$"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              formik={formik}
              name="password"
            />
            {/* <div className="forgot-link">
              <Link to="/forgot-password">Forgot Password</Link>
            </div> */}
            <CustomButton
              text="Login"
              className="w-100"
              disabled={!formik.isValid}
            />
          </Form>
        )}
      </Formik>
    </AuthCard>
  );
};

export default Login;
