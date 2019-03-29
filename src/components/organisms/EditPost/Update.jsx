import React from "react";
import { Container } from "semantic-ui-react";
import styled from "styled-components";
import { Query, Mutation } from "react-apollo";
import { gql } from "apollo-boost";

import EditPostForm from "./Form";

const onSubmit = (id, values, onUpdatePost) => {
  onUpdatePost({
    variables: {
      id,
      title: values.title,
      content: values.content
    }
  });
};

export const UpdatePostForm = ({ post, onUpdatePost }) => (
  <EditPostForm
    post={post}
    title="記事の更新"
    buttonLabel="更新"
    onSubmit={values => onSubmit(post.id, values, onUpdatePost)}
  />
);

const GET_POST = gql`
  query GetPost($id: ID!) {
    post(id: $id) {
      id
      title
      content
    }
  }
`;

const UPDATE_POST = gql`
  mutation UpdatePost($id: ID!, $title: String, $content: String) {
    updatePost(input: { id: $id, title: $title, content: $content }) {
      post {
        id
        title
        content
      }
    }
  }
`;

const Wrap = styled(Container)`
  &&& {
    margin: 7em 0;
  }
`;

const UpdatePost = ({ history, id }) => (
  <Query query={GET_POST} variables={{ id }}>
    {({ loading, error, data }) => {
      if (loading) return <Wrap>Loading...</Wrap>;
      if (error) return <Wrap>Error!</Wrap>;

      const { post } = data || {};
      return (
        <Mutation
          mutation={UPDATE_POST}
          onCompleted={data => history.push(`/posts/${data.updatePost.post.id}`)}
          >
          {(updatePost, { loading, error }) => {
            if (error) return <Wrap>Error!</Wrap>;

            return (
              <UpdatePostForm
                post={post}
                onUpdatePost={updatePost}
                loading={loading}
              />
            );
          }}
        </Mutation>
      );
    }}
  </Query>
);

export default UpdatePost;
