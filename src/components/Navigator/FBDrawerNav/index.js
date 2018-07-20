import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import DrawerNav from "./drawerNav";

class FBStackNav extends Component {
  render() {
    return <DrawerNav screenProps={{ title: "ahah" }} />;
  }
}

function mapStateToProps(state) {
  return {
    competition: state.competition
  };
}

export default connect(mapStateToProps)(FBStackNav);
