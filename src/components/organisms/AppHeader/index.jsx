import React from "react";
import { Link } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";

const MenuBar = () => (
  <Menu fixed="top" inverted>
    <Container>
      <Link to="/">
        <Menu.Item as="a" header>
          My Blog
        </Menu.Item>
      </Link>

      <Link to="/">
        <Menu.Item as="a">Home</Menu.Item>
      </Link>
    </Container>
  </Menu>
);

const AppHeader = () => <MenuBar />;

export default AppHeader;
