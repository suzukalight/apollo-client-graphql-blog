import React from "react";
import { Container, Form, Button, Header } from "semantic-ui-react";
import styled from "styled-components";
import { Formik } from "formik";

const Wrap = styled(Container)`
  &&& {
    margin: 7em 0;
  }
`;

const EditPostForm = ({
  buttonLabel,
  values,
  handleChange,
  handleBlur,
  handleSubmit
}) => (
  <Form reply onSubmit={handleSubmit}>
    <Form.Input
      type="text"
      name="title"
      placeholder="タイトル"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.title}
    />
    <Form.TextArea
      name="content"
      placeholder="本文"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.content}
    />
    <Button type="submit" primary>
      {buttonLabel}
    </Button>
  </Form>
);

export const EditPost = ({
  post = { title: "", content: "" },
  title,
  buttonLabel,
  onSubmit
}) => (
  <Wrap text>
    <Header as="h3" dividing>
      {title}
    </Header>

    <Formik
      initialValues={{ ...post }}
      onSubmit={onSubmit}
      render={props => <EditPostForm buttonLabel={buttonLabel} {...props} />}
    />
  </Wrap>
);

export default EditPost;
