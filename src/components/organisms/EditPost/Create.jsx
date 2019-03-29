import React from "react";
import { Container } from "semantic-ui-react";
import styled from "styled-components";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";

import EditPostForm from "./Form";

const onSubmit = (values, onCreatePost) => {
  onCreatePost({
    variables: {
      title: values.title,
      content: values.content
    }
  });
};

export const CreatePostForm = ({ onCreatePost }) => (
  <EditPostForm
    title="記事の作成"
    buttonLabel="新規作成"
    onSubmit={values => onSubmit(values, onCreatePost)}
  />
);

const CREATE_POST = gql`
  mutation CreatePost($title: String, $content: String) {
    createPost(input: { title: $title, content: $content }) {
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

const CreatePost = ({ history, post = {} }) => (
  <Mutation
    mutation={CREATE_POST}
    onCompleted={data => history.push(`/posts/${data.createPost.post.id}`)}
  >
    {(createPost, { data, loading, error }) => {
      if (error) return <Wrap>Error</Wrap>;
      return <CreatePostForm onCreatePost={createPost} loading={loading} />;
    }}
  </Mutation>
);

export default CreatePost;
