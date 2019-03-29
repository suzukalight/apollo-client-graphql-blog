import React from "react";
import { Container, Header, Divider as SurDivider } from "semantic-ui-react";
import styled from "styled-components";

import Comments from "../../molecules/Comments";

const Wrap = styled(Container)`
  &&& {
    margin: 7em 0;
  }
`;

const Divider = styled(SurDivider)`
  &&& {
    margin: 4em 0;
  }
`;

const Post = ({ post = {} }) => (
  <Wrap text>
    <Header as="h1">{post.title}</Header>

    <p>{post.content}</p>

    <Divider />

    <div>
      <Comments comments={post.comments} />
    </div>
  </Wrap>
);

export default Post;
