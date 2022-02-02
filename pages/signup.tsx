import SignUpForm from "components/molecules/SignUpForm";
import Testimonial from "components/organism/Testimonial";
import SplitScreenLayout from "components/templates/SplitScreenLayout";
import { useUser } from "lib/hooks";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const SignUp: NextPage = () => {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) router.push("/");
  }, [user, router]);
  return <SplitScreenLayout leftContainer={<SignUpForm />} rightContainer={<Testimonial />} />;
};

export default SignUp;
