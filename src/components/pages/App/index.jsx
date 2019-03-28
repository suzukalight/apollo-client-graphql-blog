import React from "react";
import { Route, BrowserRouter } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Router from "./Router";

import "semantic-ui-css/semantic.min.css";

// configure store and router
const history = createBrowserHistory();

const Root = () => (
  <>
    <BrowserRouter history={history}>
      <Route path="/" component={Router} />
    </BrowserRouter>
  </>
);

export default Root;
