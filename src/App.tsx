import React from "react";
import { Provider } from "react-redux";
import Main from "./views/Main";
import store from "./redux/store";

export default () => (
  <Provider store={store}>
    <Main />
  </Provider>
);
