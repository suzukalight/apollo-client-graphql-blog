import React from "react";

import AppHeader from "../../organisms/AppHeader";
import AppFooter from "../../organisms/AppFooter";

export const AppPresenter = props => (
  <div>
    <AppHeader />

    {props.children}

    <AppFooter />
  </div>
);

export default AppPresenter;
