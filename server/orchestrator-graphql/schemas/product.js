const APP_URL = "http://localhost:4002";
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

    type Category{
        id: Int
        name: String
        createdAt: String
        updatedAt: String
    }

    type Query{
        getAllProduct: [Product]
        getProductById(id: Int!): Product
        showError: Error
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
        const { data } = await axios.get(`${APP_URL}/product/${args.id}`);
        return data.data;
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
