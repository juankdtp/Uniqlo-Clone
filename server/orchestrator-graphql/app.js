if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

const {
  typeDefs: productTypeDefs,
  resolvers: productResolvers,
} = require("./schemas/product");

(async () => {
  const server = new ApolloServer({
    typeDefs: [productTypeDefs],
    resolvers: [productResolvers],
    introspection: true,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`orchestrator-graphql server ready at: ${url}`);
})();
