import { gql } from "@apollo/client";

export const COUNT_CAMPGROUNDS_BY_AUTHOR = gql`
  query COUNT_CAMPGROUNDS_BY_AUTHOR($authorID: ID!) {
    campgroundsCount(where: { author: { id: { equals: $authorID } } })
  }
`;
