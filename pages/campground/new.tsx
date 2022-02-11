import CampgroundForm from "components/molecules/CampgroundForm";
import OneColumnLayout from "components/templates/OneColumnLayout";
import { useUser } from "lib/hooks";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const NewCampground: NextPage = () => {
  const user = useUser();
  const router = useRouter();
  useEffect(() => {
    if (user) router.push("/");
  }, [user, router]);
  return (
    <>
      <Head>
        <title>Add new campground</title>
      </Head>
      <OneColumnLayout mainContainer={user ? <CampgroundForm authorID={user?.id} /> : <></>} />
    </>
  );
};

export default NewCampground;
