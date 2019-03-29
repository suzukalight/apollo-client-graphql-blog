import React from "react";
import { withRouter } from "react-router-dom";

import Post from "../../../organisms/Post";

export const PostPresenter = props => <Post id={props.match.params.id} {...props} />;

export default withRouter(PostPresenter);
