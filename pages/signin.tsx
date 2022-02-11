import SignInForm from "components/molecules/SignInForm";
import OneColumnLayout from "components/templates/OneColumnLayout";
import { useUser } from "lib/hooks";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const SignIn: NextPage = () => {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) router.push("/");
  }, [user, router]);

  return <OneColumnLayout mainContainer={<SignInForm />} />;
};

export default SignIn;
