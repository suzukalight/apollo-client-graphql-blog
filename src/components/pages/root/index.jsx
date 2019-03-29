import React from "react";
import { Link } from "react-router-dom";
import { Item, Container, Segment, Header } from "semantic-ui-react";
import styled from "styled-components";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const Post = ({ post: { id, title, content } }) => (
  <Item>
    <Item.Image size="tiny" src="/images/wireframe/image.png" />

    <Item.Content>
      <Item.Header as="a">
        <Link to={`/posts/${id}`}>{title} </Link>
      </Item.Header>
      {/* <Item.Meta>{authorName}</Item.Meta> */}
      <Item.Description>{content}</Item.Description>
    </Item.Content>
  </Item>
);

const Wrap = styled(Container)`
  &&& {
    margin: 7em 0;
  }
`;

const Hero = () => (
  <Segment
    inverted
    textAlign="center"
    style={{ minHeight: 700, padding: "1em 0em" }}
    vertical
  >
    <Container text>
      <Header
        as="h1"
        content="My GraphQL Blog"
        inverted
        style={{
          fontSize: "4em",
          fontWeight: "normal",
          marginBottom: 0,
          marginTop: "3em"
        }}
      />
      <Header
        as="h2"
        content="Do whatever you want when you want to."
        inverted
        style={{
          fontSize: "1.7em",
          fontWeight: "normal",
          marginTop: "1.5em"
        }}
      />
      {/* <Button primary size="huge">
        Get Started
        <Icon name="right arrow" />
      </Button> */}
    </Container>
  </Segment>
);

export const RootPresenter = ({ posts = [] }) => (
  <>
    <Hero />
    <Wrap text>
      <Item.Group divided>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </Item.Group>
    </Wrap>
  </>
);

const LIST_POSTS = gql`
  query AllPosts {
    posts {
      id
      title
      content
    }
  }
`;

export const Root = () => (
  <Query query={LIST_POSTS}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error...</p>;

      return <RootPresenter posts={data.posts} />;
    }}
  </Query>
);

export default Root;
