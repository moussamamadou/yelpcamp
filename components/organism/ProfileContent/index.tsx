import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import CampgroundsByAuthor from "../CamprgoundsByAuthor";
import { useQuery } from "@apollo/client";
import { useUser } from "lib/hooks";
import { GET_CAMPGROUNDS_BY_AUTHOR } from "operations/queries";
import Title from "components/atoms/Title";
import Button from "components/atoms/Button";

const ProfileContent = () => {
  const router = useRouter();

  const user = useUser();

  let pageValue = 1;
  if (router.query.page) pageValue = Number(router.query.page);
  return (
    <Box width="100%">
      <Text fontSize="lg" textAlign="center" paddingBlock="1rem">
        Welcome <b>{user?.name}</b> !
      </Text>
      <Flex paddingBottom="2rem">
        <Box>
          <Title size="medium">Your campgrounds :</Title>
        </Box>
        <Spacer />
        <Box>
          <Button onClick={() => router.push("/campground/new")}>Add Campground</Button>
        </Box>
      </Flex>
      <CampgroundsByAuthor authorID={user?.id || ""} page={pageValue} />
    </Box>
  );
};

export default ProfileContent;
