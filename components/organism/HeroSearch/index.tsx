import { Box, Link, Text } from "@chakra-ui/react";
import Title from "components/atoms/Title";
import Search from "components/molecules/Search";
import NextLink from "next/link";
const HeroSearch = () => {
  return (
    <Box bgColor="#f8f5f0" padding="1rem 2rem" borderRadius="0.5rem" minWidth="100%">
      <Title size="medium">Welcome to YelpCamp</Title>
      <Text maxW="sm">View our hand-picked campgrounds from all over the world, or add your own</Text>
      <Search />
      <NextLink href="/campground/new">
        <Link textDecoration="underline">Or add your own campground</Link>
      </NextLink>
    </Box>
  );
};

export default HeroSearch;
