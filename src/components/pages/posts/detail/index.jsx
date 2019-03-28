import React from "react";
import { withRouter } from "react-router-dom";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import Post from "../../../organisms/Post";

export const PostPresenter = props => <Post {...props} />;

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

export const PostContainer = ({ match }) => (
  <Query query={GET_POST} variables={{ id: match.params.id }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error...</p>;

      return <PostPresenter post={data.post} />;
    }}
  </Query>
);

export default withRouter(PostContainer);
