import { gql } from "@apollo/client";

export const DELETE_CAMPGROUND = gql`
  mutation deleteCampground($campground_id: ID!) {
    deleteCampground(where: { id: $campground_id }) {
      id
      name
    }
  }
`;
