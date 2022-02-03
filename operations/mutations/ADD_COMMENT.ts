import { gql } from "@apollo/client";

export const ADD_COMMENT = gql`
  mutation addComment($description: String!, $campgroundID: ID!, $authorID: ID!) {
    createComment(
      data: {
        description: $description
        campgrounds: { connect: { id: $campgroundID } }
        author: { connect: { id: $authorID } }
      }
    ) {
      id
      description
      date
      author {
        id
        name
      }
      campgrounds {
        id
        name
        description
        price
        date
        image
      }
    }
  }
`;
