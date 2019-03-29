import React from "react";
import { withRouter } from "react-router-dom";

import UpdatePost from "../../../../organisms/EditPost/Update";

export const UpdatePostPresenter = props => (
  <UpdatePost id={props.match.params.id} {...props} />
);

export default withRouter(UpdatePostPresenter);
