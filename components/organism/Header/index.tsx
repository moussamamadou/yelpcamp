import React from "react";
import Logo from "components/atoms/Logo";
import { Box, chakra, Flex, Link, Spacer } from "@chakra-ui/react";
import Navbar from "components/molecules/Navbar";

const MyHeader = chakra("header");

const Header = () => {
  return (
    <MyHeader bg="white" w="100%" paddingBlock={5} boxShadow="base" zIndex="100">
      <Flex maxW="4xl" paddingInline="2rem" m="0 auto">
        <Box>
          <Link href="/">
            <Logo />
          </Link>
        </Box>
        <Spacer />
        <Box>
          <Navbar />
        </Box>
      </Flex>
    </MyHeader>
  );
};

export default Header;
