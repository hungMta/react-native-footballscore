import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";

export default class Fixtures extends Component {
  navigateToScreen(route) {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
      params: {
        title: "Fixture one"
      }
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render() {
    return (
      <View style={{ justifyContent: "center" }}>
        <Text>Fixtures</Text>
        <TouchableOpacity
          onPress={() => this.navigateToScreen("FixtureDetail")}
        >
          <Text>detail one Fixtures</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

//  Fixtures;
