import { Box, Flex, Spacer } from "@chakra-ui/react";
import Image from "components/atoms/Image";

type Props = {
  name: "string";
  description: "string";
  date: "string";
  image: "string";
  authorName: "string";
  price: "string";
};

const Description = ({ name, description, image, authorName, price }: Props) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      paddingInline="1rem"
      paddingBlock="1rem"
      backgroundColor="white"
      borderColor="#ece1cb"
    >
      <Image src={image} alt={name} borderRadius="md" />
      <Flex paddingBlock="1rem">
        <Box fontWeight="bold">{name}</Box>
        <Spacer />
        <Box>{price} €/nights</Box>
      </Flex>
      <Box paddingBlock="0.5rem">{description}</Box>
      <Box>Submitted by {authorName}</Box>
    </Box>
  );
};

export default Description;
