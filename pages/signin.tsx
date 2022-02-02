import SignInForm from "components/molecules/SignInForm";
import Testimonial from "components/organism/Testimonial";
import SplitScreenLayout from "components/templates/SplitScreenLayout";
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

  return <SplitScreenLayout leftContainer={<SignInForm />} rightContainer={<Testimonial />} />;
};

export default SignIn;
