import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://2f42-27-50-29-117.ngrok-free.app/",
  cache: new InMemoryCache(),
});

export default client;
