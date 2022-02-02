import { gql } from "@apollo/client";

export const CURRENT_USER = gql`
  query {
    authenticatedItem {
      ... on User {
        id
        name
        username
      }
    }
  }
`;
