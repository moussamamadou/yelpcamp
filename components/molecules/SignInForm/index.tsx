import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import Input from "components/atoms/Input";
import Button from "components/atoms/Button";
import { useMutation } from "@apollo/client";
import { SIGN_IN } from "operations/mutations";
import Alert from "components/atoms/Alert";
import { CURRENT_USER } from "operations/queries/CURRENT_USER";

type FormValues = {
  username: string;
  password: string;
};

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const initialValues: FormValues = {
  username: "",
  password: "",
};

const SignInForm = () => {
  const [signIn, { data, loading }] = useMutation(SIGN_IN, {
    refetchQueries: [{ query: CURRENT_USER }],
  });

  const onSubmit = async ({ username, password }: FormValues, helpers: FormikHelpers<FormValues>) => {
    await signIn({ variables: { username, password } });
    helpers.resetForm();
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form>
          <Input label="User Name" name="username" type="text" placeholder="johndoe_92" />
          <Input label="Password" name="password" type="password" placeholder="Choose your password" />
          <Button type="submit" isLoading={loading ? true : false}>
            Sign In
          </Button>
        </Form>
      </Formik>
      {data?.authenticateUserWithPassword?.__typename === "UserAuthenticationWithPasswordFailure" ? (
        <Alert>{data?.authenticateUserWithPassword?.message}</Alert>
      ) : null}
    </>
  );
};

export default SignInForm;
