import { gql } from "@apollo/client";

export const GET_CAMPGROUNDS_BY_AUTHOR = gql`
  query getCampgroundsByAuthor($authorID: ID!, $take: Int!, $skip: Int!) {
    campgrounds(where: { author: { id: { equals: $authorID } } }, take: $take, skip: $skip) {
      id
      name
      description
      image
    }
  }
`;
