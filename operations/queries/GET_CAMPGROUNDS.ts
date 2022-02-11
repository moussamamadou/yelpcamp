import { gql } from "@apollo/client";

export const GET_CAMPGROUNDS = gql`
  query getCampgrounds($search: String!, $take: Int!, $skip: Int!, $dateOrder: OrderDirection!) {
    campgrounds(
      where: { name: { contains: $search } }
      take: $take
      skip: $skip
      orderBy: [{ date: $dateOrder }]
    ) {
      id
      name
      description
      image
    }
  }
`;
