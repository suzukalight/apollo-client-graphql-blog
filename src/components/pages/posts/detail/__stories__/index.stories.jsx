import React from "react";
import { storiesOf } from "@storybook/react";

import { PostPresenter } from "..";

import "semantic-ui-css/semantic.min.css";

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

const post = {
  title: "Lorem ipsum dolor sit amet",
  content:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis",
  comments
};

storiesOf("pages/posts/detail", module).add("default", () => (
  <PostPresenter post={post} comments={comments} />
));
