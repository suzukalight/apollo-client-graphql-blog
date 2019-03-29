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
  input PostCreateInput {
    title: String!
    content: String!
  }

  mutation createPost($input: PostCreateInput) {
    post {
      id
      title
      content
    }
  }
`;

const Wrap = styled(Container)`
  &&& {
    margin: 7em 0;
  }
`;

const CreatePost = ({ post = {} }) => (
  <Mutation
    mutation={CREATE_POST}
    onCompleted={() => (window.location.href = "/")}
  >
    {(createPost, { data, loading, error }) => {
      if (error) return <Wrap>Error</Wrap>;
      return <CreatePostForm onCreatePost={createPost} loading={loading} />;
    }}
  </Mutation>
);

export default CreatePost;
