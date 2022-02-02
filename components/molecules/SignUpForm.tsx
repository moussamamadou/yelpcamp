import * as Yup from "yup";
import { Formik, Form, FormikHelpers } from "formik";
import { useMutation } from "@apollo/client";
import { SIGN_IN, SIGN_UP } from "operations/mutations";
import Input from "components/atoms/Input";
import Button from "components/atoms/Button";
import { useEffect, useState } from "react";
import { correctMessage } from "lib/helpers";
import Alert from "components/Alert";
import Router from "next/router";

type FormValues = {
  name: string;
  username: string;
  password: string;
};

const initialValues: FormValues = { name: "", username: "", password: "" };

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(4, "Username must be at least 4 characters"),
  username: Yup.string()
    .required()
    .min(4, "Username must be at least 4 characters")
    .matches(/^[A-Za-z]/, "User name should start with an alphabet so, [A-Za-z]")
    .matches(
      /[A-Za-z0-9_]$/,
      "User name characters can be alphabets, numbers or an underscore so, [A-Za-z0-9_]"
    ),
  password: Yup.string().required().min(8, "Password must be at least 8 characters"),
});

export default function SignUpForm() {
  const [signUp, { loading, error }] = useMutation(SIGN_UP);
  const [signIn] = useMutation(SIGN_IN);

  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (values: FormValues, helpers: FormikHelpers<FormValues>) => {
    const { data } = await signUp({ variables: values });

    helpers.resetForm();

    if (data.createUser) {
      await signIn({ variables: { username: values.username, password: values.password } });
      Router.push("/");
    }
  };

  useEffect(() => {
    if (error?.message) setErrorMessage(correctMessage(error.message));
  }, [error]);

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form>
          <Input type="text" placeholder="John Doe" name="name" label="Full Name" />
          <Input type="text" placeholder="johndoe_92" name="username" label="User Name" />
          <Input type="password" placeholder="Choose your password" name="password" label="Password" />
          <Button type="submit" isLoading={loading}>
            Create my account
          </Button>
        </Form>
      </Formik>
      {errorMessage && <Alert>{errorMessage}</Alert>}
    </>
  );
}

// {
//   "data": {
//     "createUser": {
//       "id": "ckz5q04201397dwv41i472sya",
//       "name": "mmb",
//       "username": "mmb3"
//     }
//   }
// }
