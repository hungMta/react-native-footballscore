import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";

class Team extends Component {

  navigateToScreen(route){
    const navigationAction = NavigationActions.navigate({
      routeName: route,
      params:{
        title: "player1"
      }
    })
    this.props.navigation.dispatch(navigationAction);
  }

  render() {
    return (
      <View style={{ justifyContent: "center" }}>
        <Text>Team</Text>
        <TouchableOpacity onPress = {() => this.navigateToScreen("PlayerDetail")}>
          <Text>Player 1</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Team;
