import React, { Component } from "react";
import { View, Text } from "react-native";
import { Provider, connect } from "react-redux";
import {configStore} from "./store/index";
import DrawerNavigation from "./components/Navigator/FBDrawerNav/drawerNav";
import StackNav from "./components/Navigator/FBDrawerNav/stackNav";

class Main extends Component {
  render() {
    return <StackNav />;
  }
}

connect()(Main);

export default class App extends Component {
  render() {
    return (
      <Provider store={configStore()}>
        <Main />
      </Provider>
    );
  }
}
