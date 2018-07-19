import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import StackNavigation from "../StackNavigation/index";

class Competition extends Component {
  render() {
    return <StackNavigation screenProps={{ title: "asdfasf" }} />;
  }
}

export default Competition;
