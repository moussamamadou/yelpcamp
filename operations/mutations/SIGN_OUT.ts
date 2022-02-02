import { gql } from "@apollo/client";

export const SIGN_OUT = gql`
  mutation SIGN_OUT {
    endSession
  }
`;
