import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";

class News extends Component {

  navigateToScreen(route) {
    const naviagtionAction = NavigationActions.navigate({
      routeName: route,
      params:{
          title: "news one"
      }
    });
    this.props.navigation.dispatch(naviagtionAction);
  }

  render() {
    return (
      <View style={{ justifyContent: "center" }}>
        <Text>News</Text>
        <TouchableOpacity onPress={() => this.navigateToScreen("NewsDetail")}>
          <Text>news detail</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default News;
