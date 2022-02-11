import { gql } from "@apollo/client";

export const COUNT_CAMPGROUNDS = gql`
  query COUNT_CAMPGROUNDS($search: String!) {
    campgroundsCount(where: { name: { contains: $search } })
  }
`;
