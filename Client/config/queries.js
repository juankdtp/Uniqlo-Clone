import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query GetAllProduct {
    getAllProduct {
      id
      name
      slug
      description
      price
      mainImg
      categoryId
      authorId
      createdAt
      updatedAt
      Category {
        id
        name
        createdAt
        updatedAt
      }
    }
  }
`;

export const GET_PRODUCT_BY_ID = gql`
  query GetAllProduct($getProductByIdId: Int!) {
    getProductById(id: $getProductByIdId) {
      id
      name
      slug
      description
      price
      mainImg
      categoryId
      authorId
      createdAt
      updatedAt
      Category {
        id
        name
        createdAt
        updatedAt
      }
      User {
        _id
        username
        password
        role
        phoneNumber
        address
        email
      }
    }
  }
`;
