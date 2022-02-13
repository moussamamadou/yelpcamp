import { useQuery } from "@apollo/client";
import Alert from "components/atoms/Alert";
import Description from "components/molecules/Description";
import { GET_CAMPGROUND } from "operations/queries";
import { useUser } from "lib/hooks";
import { Box, Flex, Spinner } from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";
import CommentList from "components/molecules/CommentList";
import Router from "next/router";
import Button from "components/atoms/Button";

type Props = {
  campgroundID: string | string[] | undefined;
};
const CampgroundDetails = ({ campgroundID }: Props) => {
  const { loading, error, data } = useQuery(GET_CAMPGROUND, { variables: { campgroundID: campgroundID } });
  const user = useUser();
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
    const { name, description, date, image, id, price, author, comments } = data.campground;
    return (
      <Box width="100%">
        <Description
          name={name}
          description={description}
          date={date}
          image={image}
          authorName={author.name}
          price={price}
        />
        <Box
          borderWidth="1px"
          borderRadius="lg"
          paddingInline="1rem"
          paddingBlock="1rem"
          backgroundColor="white"
          borderColor="#ece1cb"
          marginTop="1rem"
        >
          <CommentList comments={comments} userID={user?.id || ""} />
          <Flex justify="end">
            <Box>
              <Button
                leftIcon={<ChatIcon />}
                onClick={() => {
                  if (user) return Router.push(`/comment/new?campgroundID=${campgroundID}`);
                  else return Router.push(`/signin`);
                }}
              >
                Leave a comment
              </Button>
            </Box>
          </Flex>
        </Box>
      </Box>
    );
  }
  return <></>;
};

export default CampgroundDetails;
