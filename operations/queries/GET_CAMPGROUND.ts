import { gql } from "@apollo/client";

export const GET_CAMPGROUND = gql`
  query getCampground($campgroundID: ID!) {
    campground(where: { id: $campgroundID }) {
      id
      name
      description
      image
      price
      date
      author {
        id
        name
      }
      comments {
        id
        description
        author {
          id
          name
        }
        date
      }
    }
  }
`;
