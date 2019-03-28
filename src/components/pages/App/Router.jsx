import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";

import App from "./App";
import Post from "../posts/detail";
import Root from "../root";

export default function AppRouter({ history, location }) {
  return (
    <App>
      <Switch>
        <Route path="/posts/:id" render={() => <Post />} />
        <Route path="/" render={() => <Root />} />
      </Switch>
    </App>
  );
}

AppRouter.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object
};
