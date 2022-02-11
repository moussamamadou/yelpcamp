import { useQuery } from "@apollo/client";
import { GET_CAMPGROUNDS } from "operations/queries";
import Alert from "components/atoms/Alert";
import CampgroundList from "components/molecules/CampgroundList";
import { Box, Spinner } from "@chakra-ui/react";
import Title from "components/atoms/Title";

const CampgroundsByLatest = () => {
  const { loading, error, data } = useQuery(GET_CAMPGROUNDS, {
    variables: { search: "", take: 3, skip: 0, dateOrder: "desc" },
  });

  if (loading)
    return (
      <Box paddingBlock="1rem">
        <Spinner size="xl" />
      </Box>
    );
  if (error)
    return (
      <Box paddingBlock="1rem">
        <Alert>{error.message}</Alert>
      </Box>
    );
  if (data) {
    const { campgrounds } = data;
    return (
      <>
        <Title size="small">Latest Campground</Title>
        <CampgroundList campgrounds={campgrounds} />
      </>
    );
  }
  return <></>;
};

export default CampgroundsByLatest;
