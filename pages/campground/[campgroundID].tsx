import CampgroundDetails from "components/organism/CampgroundDetails";
import AsymmetricalLayout from "components/templates/AsymmetricalLayout";
import { NextPage } from "next";
import { useRouter } from "next/router";
import CampgroundsByLatest from "components/organism/CampgroundsByLatest";
import Head from "next/head";

const CampgroundPage: NextPage = () => {
  const router = useRouter();
  const { campgroundID } = router.query;
  const { page } = router.query;

  let pageValue;
  if (!page) pageValue = 1;
  else pageValue = Number(page);

  return (
    <>
      <Head>
        <title>Yelcamp | Campground</title>
      </Head>
      <AsymmetricalLayout
        mainContainer={campgroundID ? <CampgroundDetails campgroundID={campgroundID} /> : <></>}
        sideContainer={<CampgroundsByLatest />}
      />
    </>
  );
};

export default CampgroundPage;
