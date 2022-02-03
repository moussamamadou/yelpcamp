import { gql } from "@apollo/client";

export const UPDATE_COMMENT = gql`
  mutation updateComment($description: String!, $commentID: ID!) {
    updateComment(where: { id: $commentID }, data: { description: $description }) {
      id
      description
    }
  }
`;
