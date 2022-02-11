import { Flex } from "@chakra-ui/react";
import Footer from "components/organism/Footer";
import Header from "components/organism/Header";

type Props = {
  mainContainer: React.ReactElement;
};

export default function OneColumnLayout({ mainContainer }: Props) {
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
          <Flex direction="column" align="center" w="100%">
            {mainContainer}
          </Flex>
        </main>
      </Flex>
      <Footer />
    </Flex>
  );
}
