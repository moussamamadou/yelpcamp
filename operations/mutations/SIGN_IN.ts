import { gql } from "@apollo/client";

export const SIGN_IN = gql`
  mutation SIGN_IN($username: String!, $password: String!) {
    authenticateUserWithPassword(username: $username, password: $password) {
      __typename
      ... on UserAuthenticationWithPasswordSuccess {
        sessionToken
        item {
          id
          name
          username
        }
        sessionToken
      }
      ... on UserAuthenticationWithPasswordFailure {
        message
      }
    }
  }
`;
