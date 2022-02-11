import { useQuery } from "@apollo/client";
import { GET_CAMPGROUNDS } from "operations/queries";
import Alert from "components/atoms/Alert";
import CampgroundList from "components/molecules/CampgroundList";
import Pagination from "components/molecules/Pagination";
import { perPage } from "constant";
import { COUNT_CAMPGROUNDS } from "operations/queries";
import { Box, Spinner } from "@chakra-ui/react";

type Props = {
  search?: string;
  page: number;
};

const CampgroundsBySearch = ({ search = "", page = 1 }: Props) => {
  const { loading, error, data } = useQuery(GET_CAMPGROUNDS, {
    variables: { search, take: perPage, skip: (page - 1) * perPage, dateOrder: "desc" },
  });
  const countResponse = useQuery(COUNT_CAMPGROUNDS, {
    variables: { search },
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
      <Box paddingBlock="1rem">
        <CampgroundList campgrounds={campgrounds} />
        {countResponse.data && (
          <Pagination page={page} perPage={perPage} count={countResponse.data.campgroundsCount} />
        )}
      </Box>
    );
  }
  return <></>;
};

export default CampgroundsBySearch;
