import { gql } from "@apollo/client";

export const SIGN_UP = gql`
  mutation SIGN_UP($name: String!, $username: String!, $password: String!) {
    createUser(data: { name: $name, username: $username, password: $password }) {
      id
      name
      username
    }
  }
`;
