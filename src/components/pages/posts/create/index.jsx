import React from "react";
import { withRouter } from "react-router-dom";

import CreatePost from "../../../organisms/EditPost/Create";

export const CreatePostPresenter = props => <CreatePost {...props} />;

export default withRouter(CreatePostPresenter);
