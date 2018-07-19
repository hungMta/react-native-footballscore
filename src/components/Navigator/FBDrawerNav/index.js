import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import DrawerNav from "./drawerNav"

class FBStackNav extends Component {
  render() {
    return <DrawerNav screenProps={{ title: "ahah" }} />;
  }
}

mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(FBStackNav);
