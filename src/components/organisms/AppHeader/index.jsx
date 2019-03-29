import React from "react";
import { Link } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";

const MenuBar = () => (
  <Menu fixed="top" inverted>
    <Container>
      <Link to="/">
        <Menu.Item header>My GraphQL Blog</Menu.Item>
      </Link>

      <Link to="/">
        <Menu.Item>Home</Menu.Item>
      </Link>

      <Link to="/posts/create">
        <Menu.Item>Create Post</Menu.Item>
      </Link>
    </Container>
  </Menu>
);

const AppHeader = () => <MenuBar />;

export default AppHeader;
