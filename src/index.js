import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
// import { client } from './client';
import { ApolloProvider } from '@apollo/client';

import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { HttpLink } from "apollo-link-http";

const httpLink = new HttpLink({
  uri: "https://localhost:4000",
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([httpLink])
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
);