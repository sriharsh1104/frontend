import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import {
  Input,
  PasswordInput,
} from "../../../Components/UI/Formik/FormikFields";
import { AuthCard, CustomButton } from "../../../Components/UI";
import { signUp } from "../../../Api/user.action";

const Register = () => {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Please Enter Valid Email Address")
      .required("Please Enter Email Address"),
    username: Yup.string().required("Please Enter Username"),
    password: Yup.string().required("Please Enter Ypur Password"),
  });
  const onSubmit = async (values: any) => {
    const registerDetails: any = {
      email: values?.email,
      username: values?.username,
      password: values?.password,
    };
    const result: any = await signUp(registerDetails);
    if (result?.status === 200) {
      navigate("/");
    } else {
    }
  };
  return (
    <AuthCard isLogo title="Register to Admin">
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
            <Input
              label="username"
              placeholder="Admin"
              type="username"
              onChange={formik?.handleChange}
              onBlur={formik?.handleBlur}
              value={formik?.values?.username}
              formik={formik}
              name="username"
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
            
            <CustomButton
              text="Register"
              className="w-100"
              disabled={!formik.isValid}
            />
          </Form>
        )}
      </Formik>
    </AuthCard>
  );
};

export default Register;
