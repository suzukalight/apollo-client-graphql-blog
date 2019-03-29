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
      <Item.Header>
        <Link to={`/posts/${id}`}>{title} </Link>
      </Item.Header>
      {/* <Item.Meta>{authorName}</Item.Meta> */}
      <Item.Description>{content}</Item.Description>
    </Item.Content>
  </Item>
);

const HeroWrap = styled(Segment)`
  &&& {
    min-height: 600px;
    padding: 1em 0;
  }
`;

const Title = styled(Header)`
  &&& {
    margin: 3em 0 0;
    font-size: 4em;
    font-weight: normal;
  }
`;

const Description = styled(Header)`
  &&& {
    margin: 1.5em 0 0;
    font-size: 1.7em;
    font-weight: normal;
  }
`;

const Hero = () => (
  <HeroWrap inverted textAlign="center" vertical>
    <Container text>
      <Title as="h1" inverted>
        My GraphQL Blog
      </Title>
      <Description as="h2" inverted>
        Do whatever you want when you want to.
      </Description>
      {/* <Button primary size="huge">
        Get Started
        <Icon name="right arrow" />
      </Button> */}
    </Container>
  </HeroWrap>
);

const PostsWrap = styled(Container)`
  &&& {
    margin: 7em 0;
  }
`;

export const RootPresenter = ({ posts = [] }) => (
  <>
    <Hero />
    <PostsWrap text>
      <Item.Group divided>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </Item.Group>
    </PostsWrap>
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
