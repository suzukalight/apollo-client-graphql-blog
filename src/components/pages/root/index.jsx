import React from "react";
import { Link } from "react-router-dom";
import { Card, Container } from "semantic-ui-react";

const Post = ({ post: { id, title, content } }) => (
  <Link to={`/posts/${id}`}>
    <Card>
      <Card.Content>
        <Card.Header>{(title || "").substring(0, 128)}</Card.Header>
        {/* <Card.Meta>{authorName}</Card.Meta> */}
        <Card.Description>{(content || "").substring(0, 128)}</Card.Description>
      </Card.Content>
    </Card>
  </Link>
);

export const RootPresenter = ({ posts = [] }) => (
  <Container style={{ marginTop: "7em" }}>
    <Card.Group itemsPerRow={3}>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </Card.Group>
  </Container>
);

export default RootPresenter;
