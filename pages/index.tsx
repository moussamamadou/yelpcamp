import HomeContent from "components/organism/HomeContent";
import OneColumnLayout from "components/templates/OneColumnLayout";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  let searchValue = "";
  if (router.query.search) searchValue = String(router.query.search);

  return (
    <>
      <Head>
        <title>{searchValue ? `Yelpcamp - Search : ${searchValue} ` : "Welcome to Yelpcamp"}</title>
      </Head>
      <OneColumnLayout mainContainer={<HomeContent />} />
    </>
  );
};

export default Home;
