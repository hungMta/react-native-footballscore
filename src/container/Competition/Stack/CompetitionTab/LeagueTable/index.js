import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";

export default class LeagueTable extends Component {
  navigateToScreen(route) {
    const navigationAction = NavigationActions.navigate({
      routeName: route,
      params: {
        title: "team1"
      }
    });
    this.props.navigation.dispatch(navigationAction);
  }

  render() {
    return (
      <View style={{ justifyContent: "center" }}>
        <Text>LeagueTable</Text>
        <TouchableOpacity onPress={() => this.navigateToScreen("TeamDetail")}>
          <Text>team1</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

//  LeagueTable;
