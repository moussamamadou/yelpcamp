import { useQuery } from "@apollo/client";
import { GET_CAMPGROUNDS_BY_AUTHOR } from "operations/queries";
import Alert from "components/atoms/Alert";
import CampgroundList from "components/molecules/CampgroundList";
import Pagination from "components/molecules/Pagination";
import { COUNT_CAMPGROUNDS_BY_AUTHOR } from "operations/queries";
import { perPage } from "constant";
import { Box, Spinner } from "@chakra-ui/react";

type Props = {
  authorID: string;
  page: number;
};

const CampgroundsByAuthor = ({ authorID, page = 1 }: Props) => {
  const { loading, error, data } = useQuery(GET_CAMPGROUNDS_BY_AUTHOR, {
    variables: { authorID, take: perPage, skip: (page - 1) * perPage, dateOrder: "desc" },
  });
  const countResponse = useQuery(COUNT_CAMPGROUNDS_BY_AUTHOR, {
    variables: { authorID },
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
  if (data && countResponse.data) {
    const { campgrounds } = data;
    const { campgroundsCount } = countResponse.data;

    return (
      <>
        <CampgroundList campgrounds={campgrounds} />
        {countResponse.data && <Pagination page={page} perPage={perPage} count={campgroundsCount} />}
      </>
    );
  }
  return <></>;
};

export default CampgroundsByAuthor;
