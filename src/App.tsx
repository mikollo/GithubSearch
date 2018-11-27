import React from "react";
import { Provider } from "react-redux";
import Main from "./views/Main";
import SelectedItems from "./views/SelectedItems";
import store from "./redux/store";
import { createStackNavigator } from "react-navigation";

const StackNavigator = createStackNavigator(
  {
    Main: {
      screen: Main
    },
    SelectedItems: {
      screen: SelectedItems
    }
  },
  {
    initialRouteName: "Main",
    headerMode: "none"
  }
);

export default () => (
  <Provider store={store}>
    <StackNavigator />
  </Provider>
);
