import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "", //Server Url
  cache: new InMemoryCache(),
});

export default client;
