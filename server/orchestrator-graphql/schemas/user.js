const USER_URL = "http://localhost:4001";
const axios = require("axios");
const redis = require("../helpers/redis");

const typeDefs = `#graphql
    type Error{
        statusCode: Int
        message: String
    }

    type User{
        _id: ID!
        username: String
        email: String
        password: String
        role: String
        phoneNumber: String
        address: String
    }

    type UserAddResult{
        statusCode: Int
        message: String
        data: UserAddResultData
    }

    type UserAddResultData{
        acknowledged: Boolean
        insertedId: ID
    }

    type DeleteUserResult{
        statusCode: Int
        message: String
        data: DeleteUserResultData
    }

    type DeleteUserResultData{
        acknowledged: Boolean
        deletedCount: Int
    }

    type Query{
        getAllUser: [User]
        getUserById(id: ID!): User
    }

    type Mutation{
        addUser(
        username: String!,
        email: String,
        password: String,
        role: String,
        phoneNumber: String,
        address: String): UserAddResult

        deleteUser(id: ID!): DeleteUserResult
    }
`;

const resolvers = {
  Query: {
    getAllUser: async () => {
      const { data } = await axios.get(`${USER_URL}`);
      return data.data;
    },

    getUserById: async (_, { id }) => {
      const { data } = await axios.get(`${USER_URL}/${id}`);
      return data.data;
    },
  },

  Mutation: {
    addUser: async (
      _,
      { username, email, password, role, phoneNumber, address }
    ) => {
      try {
        const { data } = await axios.post(`${USER_URL}`, {
          username,
          email,
          password,
          role,
          phoneNumber,
          address,
        });
        return data;
      } catch (err) {
        console.log(err);
        throw err;
      }
    },

    deleteUser: async (_, { id }) => {
      const { data } = await axios.delete(`${USER_URL}/${id}`);
      return data;
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
