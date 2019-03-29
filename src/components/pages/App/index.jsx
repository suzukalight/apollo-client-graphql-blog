import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import Router from "./Router";

import "semantic-ui-css/semantic.min.css";

// configure store and router
const history = createBrowserHistory();

const client = new ApolloClient({
  uri: "http://localhost:3030/graphql"
});

const Root = () => (
  <>
    <BrowserRouter history={history}>
      <ApolloProvider client={client}>
        <Route path="/" component={Router} />
      </ApolloProvider>
    </BrowserRouter>
  </>
);

export default Root;
