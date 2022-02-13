import { Box, Flex } from "@chakra-ui/react";
import Footer from "components/organism/Footer";
import Header from "components/organism/Header";

type Props = {
  mainContainer: React.ReactNode;
  sideContainer: React.ReactNode;
};

export default function AsymmetricalLayout({ mainContainer, sideContainer }: Props) {
  return (
    <Flex direction="column" height="100%" width="100%" minHeight="100vh">
      <Header />
      <Flex
        maxW="4xl"
        m="0 auto"
        paddingInline="2rem"
        paddingBlock="1rem"
        direction="column"
        width="100%"
        height="100%"
        grow="1"
        flex="1"
      >
        <main>
          <Flex direction={["column", "column", "row"]} align="start" w="100%" gap="1rem">
            <Box flex="1" width="100%">
              {mainContainer}
            </Box>
            <Box maxWidth={["100%", "100%", "300px"]}>{sideContainer}</Box>
          </Flex>
        </main>
      </Flex>
      <Footer />
    </Flex>
  );
}
