import { gql } from "@apollo/client";

export const DELETE_COMMENT = gql`
  mutation deleteComment($comment_id: ID!) {
    deleteComment(where: { id: $comment_id }) {
      id
      description
    }
  }
`;
