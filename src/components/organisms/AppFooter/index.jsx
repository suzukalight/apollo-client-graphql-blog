import React from "react";
import { Segment, Container, Divider, List } from "semantic-ui-react";
import styled from "styled-components";

const Wrap = styled(Segment)`
  &&& {
    margin-top: 5em;
    padding: 5em 0;
  }
`;

const AppFooter = () => (
  <Wrap inverted vertical>
    <Container textAlign="center">
      <Divider inverted section />

      <List horizontal inverted divided link size="small">
        <List.Item as="a" href="#">
          Site Map
        </List.Item>
        <List.Item as="a" href="#">
          Contact Us
        </List.Item>
        <List.Item as="a" href="#">
          Terms and Conditions
        </List.Item>
        <List.Item as="a" href="#">
          Privacy Policy
        </List.Item>
      </List>
    </Container>
  </Wrap>
);

export default AppFooter;
