import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://pangaea-interviews.vercel.app/api/graphql",
  cache: new InMemoryCache()
});

export default client;