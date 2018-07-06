/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { DrawerActions } from "react-navigation";
import Header from "../../drawer_navigation/header";
import MyTabNaivgator from "../myTabNavigator/MyTabNavigator";
const footballApi = require("../../api/API");
const constants = require("../../constants");

export default class WorldCupCompetition extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      result: null,
      id: this.props.navigation.getParam("id", 0),
      competition: null
    };
    console.log('state: ', this.state.competition)
  }

   componentDidMount () {
    // console.log("WorldCupCompetition -> " + this.props.navigation.getParam("competition", null))
    // console.log(this.props.navigation.getParam("competition", null))
      this.setState({
        competition: this.props.navigation.getParam("competition", null)
    })
    console.log('cdm: ', this.state.competition)

    const url = constants.API_URL + constants.COMPETITION + "/" + this.props.navigation.getParam("id", 0);
    console.log(url)
    return footballApi
    .callAPI(
      constants.COMPETITION + "/" + this.props.navigation.getParam("id", 0)
    )
    .then(data => {
    }).catch(error => {
        throw error
    });
  }

  componentDidUpdate() {
    footballApi
      .callAPI(
        constants.COMPETITION + "/" + this.props.navigation.getParam("id", 0)
      )
      .then(data => {

      });
  }

  on_press = text => () => {
    console.log(text);
  };

  render() {
      console.log(console.log('vc: ', this.state.competition))
    return (
      <View style={{flex: 1}} >
        <Header {...this.props} title="WorldCup 2018"/>
        <MyTabNaivgator />
      </View>
    );
  }
}
