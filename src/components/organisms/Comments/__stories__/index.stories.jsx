import React from "react";
import { storiesOf } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import { CommentsPresenter } from "..";

import "semantic-ui-css/semantic.min.css";

const client = new ApolloClient({
  cache: new InMemoryCache()
});

const comments = [
  {
    id: 1,
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis"
  },
  {
    id: 2,
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis"
  }
];

storiesOf("organisms/Comments", module)
  .addDecorator(getStory => (
    <MemoryRouter>
      <ApolloProvider client={client}>{getStory()}</ApolloProvider>
    </MemoryRouter>
  ))
  .add("default", () => <CommentsPresenter />)
  .add("two comments", () => <CommentsPresenter comments={comments} />);
