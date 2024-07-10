import * as Yup from "yup";
import { Form, Formik } from "formik";

import toast from "react-hot-toast";
import { createBlog } from "../../Api/user.action";
import { AuthCard, CustomButton } from "../../Components/UI";
import { Input } from "../../Components/UI/Formik/FormikFields";

const MyBlog = () => {
  const initialValues = {
    title: "",
    description: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Title Is Required"),
    description: Yup.string().required("Please Enter Description"),
  }); 
  const onSubmit = async (values: any) => {
    const blogDetails: any = {
      title: values?.title,
      description: values?.description,
    };
    const result: any = await createBlog(blogDetails);
    if (result?.status === 200) {
      console.log("result", result);
      toast.success(result?.message);
    } else {
      toast.error(result?.message);
    }
  };

  return (
    <AuthCard
      isLogo
      title="Create Your Blogs"
      subtitle="Show Your View On Blogs"
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <Input
              label="title"
              placeholder="Title"
              type="text"
              onChange={formik?.handleChange}
              onBlur={formik?.handleBlur}
              value={formik?.values?.title}
              formik={formik}
              name="title"
            />
            <Input
              label="description"
              placeholder="description"
              type="text"
              onChange={formik?.handleChange}
              onBlur={formik?.handleBlur}
              value={formik?.values?.description}
              formik={formik}
              name="description"
            />
            <CustomButton
              text="Create Blog"
              className="w-100"
              disabled={!formik?.isValid}
            />
          </Form>
        )}
      </Formik>
    </AuthCard>
  );
};

export default MyBlog;
