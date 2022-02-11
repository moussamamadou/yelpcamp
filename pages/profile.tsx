import ProfileContent from "components/organism/ProfileContent";
import OneColumnLayout from "components/templates/OneColumnLayout";
import { useUser } from "lib/hooks";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Profile: NextPage = () => {
  const user = useUser();
  const router = useRouter();
  useEffect(() => {
    if (!user) router.push("/");
  }, [user, router]);

  return (
    <>
      <Head>
        <title>{user?.name + ", Welcome to Yelpcamp profile page"}</title>
      </Head>
      <OneColumnLayout mainContainer={user ? <ProfileContent /> : <></>} />;
    </>
  );
};

export default Profile;
