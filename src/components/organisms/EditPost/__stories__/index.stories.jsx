import React from "react";
import { storiesOf } from "@storybook/react";

import { CreatePostForm } from "../Create";
import { UpdatePostForm } from "../Update";

import "semantic-ui-css/semantic.min.css";

const post = {
  title: "Lorem ipsum dolor sit amet",
  content:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis"
};

storiesOf("organisms/EditPost", module)
  .add("create", () => <CreatePostForm />)
  .add("update", () => <UpdatePostForm post={post} />);
