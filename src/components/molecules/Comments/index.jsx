import React from "react";
import { Button, Comment, Form, Header } from "semantic-ui-react";

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
      {/* <Comment.Actions>
        <Comment.Action>Reply</Comment.Action>
      </Comment.Actions> */}
    </Comment.Content>
  </Comment>
);

const CommentForm = () => (
  <Form reply>
    <Form.TextArea />
    <Button content="Add Reply" labelPosition="left" icon="edit" primary />
  </Form>
);

const Comments = ({ comments }) => (
  <Comment.Group>
    <CommentHeader>Comment</CommentHeader>
    {(comments || []).map(comment => (
      <CommentNode key={comment.id} content={comment.content} />
    ))}
    <CommentForm />
  </Comment.Group>
);

export default Comments;
