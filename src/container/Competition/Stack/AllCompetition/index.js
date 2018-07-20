import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationActions, StackActions, HeaderBackButton } from "react-navigation";
import { connect } from "react-redux";

class AllCompetition extends Component {
  navigateToScreen(route) {
    const stackActions = StackActions.push({
      routeName: route,
      params: {
        title: "Com1"
      }
    });
    this.props.navigation.dispatch(stackActions);
  }

  render() {
    return (
      <View style={{ justifyContent: "center" }}>
        <Text>AllCompetition</Text>
        <TouchableOpacity onPress={() => this.navigateToScreen("ComeptitionTab")}>
          <Text>Com1</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AllCompetition;
