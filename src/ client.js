import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { HttpLink } from "apollo-link-http";

const httpLink = new HttpLink({
  uri: "https://localhost:4000",
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([httpLink]),
  fetchOptions: {
    mode: 'no-cors',
  }
});