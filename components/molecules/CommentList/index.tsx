import { Box } from "@chakra-ui/react";
import Title from "components/atoms/Title";
import Comment from "components/molecules/Comment";

type Comment = { name: string; description: string; image: string; id: string };
type Props = {
  comments: Array<Comment>;
  userID: string;
};

const CommentList = ({ comments, userID }: Props) => {
  return (
    <>
      {!comments.length ? (
        <Title size="small">Write the first comment ... </Title>
      ) : (
        comments.map((comment: any) => (
          <Box
            key={comment.id}
            borderBottom="1px"
            borderColor="#ece1cb"
            paddingBottom="1rem"
            marginBottom="1rem"
          >
            <Comment
              description={comment.description}
              authorName={comment.author?.name}
              authorID={comment.author?.id}
              date={comment.date}
            />
          </Box>
        ))
      )}
    </>
  );
};

export default CommentList;
