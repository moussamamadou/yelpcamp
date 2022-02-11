import { Box, Flex } from "@chakra-ui/react";
import CampgroundCard from "components/atoms/Card";

type Campground = { name: string; description: string; image: string; id: string };
type Props = {
  campgrounds: Array<Campground>;
};

const CampgroundList = ({ campgrounds }: Props) => {
  return (
    <Flex gap="2rem" wrap="wrap">
      {campgrounds &&
        campgrounds.map((campground: any) => (
          <Box key={campground.id} flex="1" minWidth={250} maxWidth={400}>
            <CampgroundCard
              campgroundID={campground.id}
              name={campground.name}
              description={campground.description}
              image={campground.image}
            />
          </Box>
        ))}
    </Flex>
  );
};

export default CampgroundList;
