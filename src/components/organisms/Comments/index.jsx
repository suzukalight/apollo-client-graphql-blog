import React from "react";
import { Container, Header, Form, Button, Comment } from "semantic-ui-react";
import styled from "styled-components";
import { Formik } from "formik";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";

const CommentHeader = props => (
  <Header as="h3" dividing>
    {props.children}
  </Header>
);

const CommentNode = ({ avatarUri, authorName, createdAt, content }) => (
  <Comment>
    <Comment.Avatar src={avatarUri} />
    <Comment.Content>
      <Comment.Author as="a">{authorName}</Comment.Author>
      <Comment.Metadata>
        <div>{createdAt}</div>
      </Comment.Metadata>
      <Comment.Text>{content}</Comment.Text>
    </Comment.Content>
  </Comment>
);

const CommentForm = ({ values, handleChange, handleBlur, handleSubmit }) => (
  <Form reply onSubmit={handleSubmit}>
    <Form.TextArea
      name="content"
      placeholder="コメントを追加"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.content}
    />
    <Button
      type="submit"
      content="返信する"
      labelPosition="left"
      icon="edit"
      primary
    />
  </Form>
);

const onSubmit = (postId, values, onCreateComment, resetForm) => {
  onCreateComment({
    variables: {
      postId,
      content: values.content
    }
  });
  resetForm({ content: "" });
};

export const CommentsPresenter = ({ comments, postId, onCreateComment }) => (
  <Comment.Group>
    <CommentHeader>Comment</CommentHeader>
    {(comments || []).length
      ? comments.map(comment => (
          <CommentNode key={comment.id} content={comment.content} />
        ))
      : "（コメントはありません）"}
    <Formik
      onSubmit={(values, { resetForm }) =>
        onSubmit(postId, values, onCreateComment, resetForm)
      }
      render={props => <CommentForm {...props} />}
    />
  </Comment.Group>
);

const Wrap = styled(Container)`
  &&& {
    margin: 7em 0;
  }
`;

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

const CREATE_COMMENT = gql`
  mutation CreateComment($postId: ID!, $content: String!) {
    createComment(input: { postId: $postId, content: $content }) {
      comment {
        id
        content
      }
    }
  }
`;

const refetchQueries = postId => () => [
  { query: GET_POST, variables: { id: postId } }
];

const Comments = ({ postId, comments }) => (
  <Mutation mutation={CREATE_COMMENT} refetchQueries={refetchQueries(postId)}>
    {(createComment, { loading, error, data }) => {
      if (error) return <Wrap>Error!</Wrap>;
      return (
        <CommentsPresenter
          comments={comments}
          postId={postId}
          onCreateComment={createComment}
        />
      );
    }}
  </Mutation>
);

export default Comments;
