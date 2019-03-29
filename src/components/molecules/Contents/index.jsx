import React from "react";
import { Container, Header } from "semantic-ui-react";
import styled from "styled-components";

const Wrap = styled(Container)`
  &&& {
    margin-top: 7em;
  }
`;

const Contents = ({ children, title }) => (
  <Wrap text>
    <Header as="h1">{title}</Header>
    <p>{children}</p>
  </Wrap>
);

export default Contents;
