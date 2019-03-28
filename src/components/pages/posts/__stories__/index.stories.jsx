import React from "react";
import { storiesOf } from "@storybook/react";

import { PostsPresenter } from "..";

import "semantic-ui-css/semantic.min.css";

const post = {
  title: "Lorem ipsum dolor sit amet",
  content:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis"
};

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

storiesOf("pages/Posts", module).add("default", () => (
  <PostsPresenter post={post} comments={comments} />
));
