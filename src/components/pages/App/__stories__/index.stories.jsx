import React from "react";
import { storiesOf } from "@storybook/react";

import { AppPresenter } from "..";

import "semantic-ui-css/semantic.min.css";

storiesOf("pages/App", module).add("default", () => <AppPresenter />);
