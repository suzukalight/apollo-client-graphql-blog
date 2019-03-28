import React from "react";
import { Container, Header, Divider } from "semantic-ui-react";

import Comments from "../../molecules/Comments";

const Post = ({ post = {} }) => (
  <Container text style={{ marginTop: "7em" }}>
    <Header as="h1">{post.title}</Header>

    <p>{post.content}</p>

    <Divider style={{ margin: "4em 0" }} />

    <div>
      <Comments comments={post.comments} />
    </div>
  </Container>
);

export default Post;
