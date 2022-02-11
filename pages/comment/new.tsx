import CommentForm from "components/molecules/CommentForm";
import OneColumnLayout from "components/templates/OneColumnLayout";
import { useUser } from "lib/hooks";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const isLoggedIn = (Page: NextPage) => {
  return <Page />;
};

const NewComment: NextPage = () => {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) router.push("/");
  }, [user, router]);

  let campgroundID = "";
  if (router.query.campgroundID) campgroundID = String(router.query.campgroundID);
  return (
    <>
      <Head>
        <title>Add new comment</title>
      </Head>
      <OneColumnLayout
        mainContainer={user ? <CommentForm authorID={user?.id} campgroundID={campgroundID} /> : <></>}
      />
    </>
  );
};

export default NewComment;
