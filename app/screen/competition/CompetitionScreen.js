/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { DrawerActions } from "react-navigation";
import Header from "../../drawer_navigation/header";
const footballApi = require("../../api/API");
const constants = require("../../constants");

export default class Competition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      id: this.props.navigation.getParam("id", 0)
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    const url = constants.API_URL + constants.COMPETITION + "/" + this.props.navigation.getParam("id", 0);
    console.log(url)
    return footballApi
    .callAPI(
      constants.COMPETITION + "/" + this.props.navigation.getParam("id", 0)
    )
    .then(data => {
      console.log(data);
    }).catch(error => {
        throw error
    });
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
    footballApi
      .callAPI(
        constants.COMPETITION + "/" + this.props.navigation.getParam("id", 0)
      )
      .then(data => {
        console.log(data);
      });
  }

  on_press = text => () => {
    console.log(text);
  };

  render() {
    return (
      <View>
        <Header {...this.props} />
        <Text onPress={this.on_press("sfasfd")}>Competition Screen</Text>
        <Text>{this.props.navigation.getParam("id", 0)}</Text>
      </View>
    );
  }
}
