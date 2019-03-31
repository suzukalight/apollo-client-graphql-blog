import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Header,
  Divider as SurDivider,
  Button
} from "semantic-ui-react";
import styled from "styled-components";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import Comments from "../Comments";

const Wrap = styled(Container)`
  &&& {
    margin: 7em 0;
  }
`;

const EditWrap = styled(Container)`
  &&& {
    margin: 1em 0;
  }
`;

const Divider = styled(SurDivider)`
  &&& {
    margin: 4em 0;
  }
`;

export const PostPresenter = ({ post = {} }) => (
  <Wrap text>
    <Header as="h1">{post.title || "(no title)"}</Header>

    <EditWrap textAlign="right">
      <Link to={`/posts/${post.id}/edit`}>
        <Button>edit</Button>
      </Link>
    </EditWrap>

    <p>{post.content || "(no content)"}</p>

    <Divider />

    <Comments postId={post.id} comments={post.comments} />
  </Wrap>
);

const GET_POST = gql`
  query GetPost($id: ID!) {
    post(id: $id) {
      id
      title
      content
      comments {
        id
        content
      }
    }
  }
`;

const Post = ({ id }) => (
  <Query query={GET_POST} variables={{ id }}>
    {({ loading, error, data }) => {
      if (loading) return <Wrap>Loading...</Wrap>;
      if (error) return <Wrap>Error!</Wrap>;

      const { post } = data || {};
      return <PostPresenter post={post || {}} />;
    }}
  </Query>
);

export default Post;
