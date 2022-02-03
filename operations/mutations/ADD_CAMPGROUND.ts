import { gql } from "@apollo/client";

export const ADD_CAMPGROUND = gql`
  mutation addCampground(
    $name: String!
    $description: String!
    $price: Float!
    $image: String!
    $authorID: ID!
  ) {
    createCampground(
      data: {
        name: $name
        description: $description
        price: $price
        image: $image
        author: { connect: { id: $authorID } }
      }
    ) {
      id
      name
      description
      price
      image
      date
    }
  }
`;
