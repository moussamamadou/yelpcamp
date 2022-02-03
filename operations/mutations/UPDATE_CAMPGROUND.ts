import { gql } from "@apollo/client";

export const UPDATE_CAMPGROUND = gql`
  mutation updateCampground(
    $campgroundID: ID!
    $name: String!
    $description: String!
    $price: Float!
    $image: String!
    $authorID: ID!
  ) {
    updateCampground(
      where: { id: $campgroundID }
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
