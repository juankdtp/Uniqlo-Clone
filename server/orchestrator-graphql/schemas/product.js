const APP_URL = "http://localhost:4002";
const USER_URL = "http://localhost:4001";
const axios = require("axios");
const redis = require("../helpers/redis");

const typeDefs = `#graphql
    type Error{
        statusCode: Int
        message: String
    }

    type Product {
        id: ID!
        name: String
        slug: String
        description: String
        price: String
        mainImg: String
        categoryId: ID
        authorId: ID
        createdAt: String
        updatedAt: String
        Category: Category
    }

    type ProductById {
        id: ID!
        name: String
        slug: String
        description: String
        price: String
        mainImg: String
        categoryId: ID
        authorId: ID
        createdAt: String
        updatedAt: String
        Category: Category
        User: User
    }

    type User {
      _id: ID
      username: String
      password: String
      role: String
      phoneNumber: String
      address: String
    }

    type Category{
        id: Int
        name: String
        createdAt: String
        updatedAt: String
    }

    type AddProductResult{
      statusCode: Int
      data: ProductAddData
    }

    type ProductAddData{
      product: ProductAddProductData
      image: [ProductAddImageData]
    }

    type ProductAddProductData{
      id: ID!
      name: String
      description: String
      price: Int
      mainImg: String
      categoryId: ID
      authorId: ID
      updatedAt: String
      createdAt: String
      slug: String
    }

    type ProductAddImageData{
      id: ID!
      productId: ID
      imgUrl: String
      createdAt: String
      updatedAt: String
    }

    type ProductUpdateResult{
      statusCode: Int
      message: String
    }

    type ProductDeleteResult{
      statusCode: Int
      message: String
    }

    type Query{
        getAllProduct: [Product]
        getProductById(id: Int!): ProductById
        showError: Error
    }
    
    type Mutation{
      addProduct(
      name: String!,
      description: String
      price: Int
      mainImg: String,
      categoryId: ID
      image1: String
      image2: String
      image3: String
      authorId: ID): AddProductResult

      updateProduct(
      id: Int!,
      name: String!,
      description: String
      price: Int
      mainImg: String,
      categoryId: ID
      image1: String
      image2: String
      image3: String
      authorId: ID): ProductUpdateResult

      deleteProduct(id: Int!): ProductDeleteResult
    }
`;

const resolvers = {
  Query: {
    getAllProduct: async () => {
      try {
        const productCache = await redis.get("products");
        if (productCache) {
          const data = JSON.parse(productCache);
          //   redis.del("products");
          return data;
        } else {
          const { data } = await axios.get(`${APP_URL}/product`);
          await redis.set("products", JSON.stringify(data.data));
          return data.data;
        }
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
    getProductById: async (_, args) => {
      try {
        const getProductById = await axios.get(`${APP_URL}/product/${args.id}`);
        const productByIdData = getProductById.data.data;
        // console.log(productByIdData, 64);
        // console.log(productByIdData, 65);
        // console.log(productByIdData.authorId, 66);
        const getUserById = await axios.get(
          `${USER_URL}/${productByIdData.authorId}`
        );
        // console.log(getUserById, 70);
        const userByIdData = getUserById.data.data;
        // console.log(userByIdData, 72);
        productByIdData.User = userByIdData;
        return productByIdData;
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
  },

  Mutation: {
    addProduct: async (
      _,
      {
        name,
        description,
        price,
        mainImg,
        categoryId,
        image1,
        image2,
        image3,
        authorId,
      }
    ) => {
      try {
        const { data } = await axios.post(`${APP_URL}/product`, {
          name,
          description,
          price,
          mainImg,
          categoryId,
          image1,
          image2,
          image3,
          authorId,
        });
        redis.del("products");
        return data;
      } catch (err) {
        console.log(err);
        throw err;
      }
    },

    updateProduct: async (
      _,
      {
        id,
        name,
        description,
        price,
        mainImg,
        categoryId,
        image1,
        image2,
        image3,
        authorId,
      }
    ) => {
      const { data } = await axios.put(`${APP_URL}/product/${id}`, {
        name,
        description,
        price,
        mainImg,
        categoryId,
        image1,
        image2,
        image3,
        authorId,
      });
      redis.del("products");
      return data;
    },

    deleteProduct: async (_, { id }) => {
      const { data } = await axios.delete(`${APP_URL}/product/${id}`);
      redis.del("products");
      return data;
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
