import { Box, Text } from "@chakra-ui/react";
import Title from "components/atoms/Title";
import Search from "components/molecules/Search";
import { useRouter } from "next/router";
import CampgroundsBySearch from "../CamprgoundsBySearch";
import HeroSearch from "../HeroSearch";

const HomeContent = () => {
  const router = useRouter();
  let searchValue = "";
  if (router.query.search) searchValue = String(router.query.search);

  let pageValue = 1;
  if (router.query.page) pageValue = Number(router.query.page);
  return (
    <Box width="100%">
      {searchValue ? (
        <>
          <Title>Search result for {searchValue}</Title>
          <Text></Text>
          <Search />{" "}
        </>
      ) : (
        <HeroSearch />
      )}
      <CampgroundsBySearch search={searchValue} page={pageValue} />
    </Box>
  );
};

export default HomeContent;
