import SearchContent from "components/organism/SearchContent";
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
      <OneColumnLayout mainContainer={<SearchContent />} />
    </>
  );
};

export default Home;
