import { Box, chakra, Flex, Link, Spacer } from "@chakra-ui/react";
import Logo from "components/atoms/Logo";
import React from "react";

const MyFooter = chakra("footer");
const Footer = () => {
  return (
    <MyFooter bg="white" w="100%" p={5} boxShadow="base" zIndex="100">
      <Flex maxW={{ xl: "1200px" }} m="0 auto" paddingInline={["1rem", "2rem"]}>
        <Box>
          <Logo />
        </Box>
        <Spacer />
        <Box>
          <Link href="http://www.moussamamadou.com" isExternal>
            By Moussa Mamadou
          </Link>
        </Box>
      </Flex>
    </MyFooter>
  );
};

export default Footer;
