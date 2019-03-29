import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";

import App from "./App";
import UpdatePost from "../posts/detail/edit";
import CreatePost from "../posts/create";
import Post from "../posts/detail";
import Root from "../root";

export default function AppRouter({ history, location }) {
  return (
    <App>
      <Switch>
      <Route path="/posts/:id/edit" render={() => <UpdatePost />} />
      <Route path="/posts/create" render={() => <CreatePost />} />
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
