// -- React and related libs
import React from "react";
import { render } from "react-dom";

// -- Redux
import { Provider } from "react-redux";
import store from "./redux/store";

// -- App
import App from "./App";

// -- Rendering Application
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
