import { Box, Flex, Spacer } from "@chakra-ui/react";
import { diffDays } from "lib/helpers";

type Props = {
  description: "string";
  authorName: "string";
  authorID: "string";
  date: "string";
};
const Comment = ({ description, authorName, authorID, date }: Props) => {
  return (
    <Box>
      <Flex paddingBlock="1rem">
        <Box fontWeight="bold">{authorName}</Box>
        <Spacer />
        <Box>{new Date(date).toDateString()}</Box>
      </Flex>
      <div>{description}</div>
    </Box>
  );
};

export default Comment;
