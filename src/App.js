import React, { Component } from "react";
import { View, Text } from "react-native";
// import { Provider } from "react-redux";
// import store from "./store/store";
import DrawerNavigation from "./components/Navigator/FBDrawerNav/drawerNav"

class Main extends Component {
  render() {
    return (
      <DrawerNavigation />
    );
  }
}

export default class App extends Component {
  render() {
    return (
      // <Provider store={store}>
        <Main />
      // </Provider>
    );
  }
}
