import { LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import Button from "components/atoms/Button";
import Image from "components/atoms/Image";
import Title from "components/atoms/Title";

type Props = {
  campgroundID: string;
  name: string;
  description: string;
  image: string;
};

const Card = ({ campgroundID, name, description, image }: Props) => {
  return (
    <LinkBox
      borderWidth="1px"
      borderRadius="lg"
      paddingInline="0.5rem"
      paddingBlock="0.5rem"
      backgroundColor="white"
      borderColor="#ece1cb"
      transitionDuration="300ms"
      flex="1"
      minWidth={250}
      maxWidth={400}
      _hover={{ textDecoration: "none", boxShadow: "md", cursor: "pointer", borderColor: "#e0c996" }}
    >
      <LinkOverlay href={`/campground/${campgroundID}`}>
        <Image src={image} alt={name} borderRadius="md" />
        <Title size="small">{name}</Title>
        <Text noOfLines={2} paddingBottom="0.5rem">
          {description}
        </Text>
        <Button colorScheme="white" style={{ width: "100%" }}>
          View Campground
        </Button>
      </LinkOverlay>
    </LinkBox>
  );
};

export default Card;
