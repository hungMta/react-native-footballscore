import React, { Component } from "react";
import { View } from "react-native";
import TabNav from "../FBTab/index";
import { connect } from "react-redux";
import TabBar from "./tabBar";

class FBTabBar extends Component {
  render() {
    return <TabBar screenProps={{ title: "ahah" }} />;
  }
}

mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(FBTabBar);
