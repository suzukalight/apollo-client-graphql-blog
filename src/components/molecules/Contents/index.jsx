import React from "react";
import { Container, Header } from "semantic-ui-react";

const Contents = ({ children, title }) => (
  <Container text style={{ marginTop: "7em" }}>
    <Header as="h1">{title}</Header>
    <p>{children}</p>
  </Container>
);

export default Contents;
