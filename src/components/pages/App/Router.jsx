import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";

import App from "./App";
import Post from "../posts";
import Root from "../root";

const content = `
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.


Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.`;

const posts = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    content
  },
  {
    id: 2,
    title: "consectetuer adipiscing elit",
    content
  },
  {
    id: 3,
    title: "Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes",
    content
  }
];

const comments = [
  {
    id: 1,
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis"
  },
  {
    id: 2,
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis"
  }
];

export default function AppRouter({ history, location }) {
  return (
    <App>
      <Switch>
        <Route
          path="/posts"
          render={() => <Post post={posts[0]} comments={comments} />}
        />
        <Route path="/" render={() => <Root posts={posts} />} />
      </Switch>
    </App>
  );
}

AppRouter.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object
};
