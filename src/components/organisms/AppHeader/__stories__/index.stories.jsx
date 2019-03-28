import React from "react";
import { storiesOf } from "@storybook/react";

import AppHeader from "..";

import "semantic-ui-css/semantic.min.css";

storiesOf("organisms/AppHeader", module).add("default", () => <AppHeader />);
