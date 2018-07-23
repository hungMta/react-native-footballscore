import React, { Component } from "react";
import { View } from "react-native";
import { createDrawerNavigator } from "react-navigation";
import { connect } from "react-redux";
import SideBar from "./SideBar/sideBar";
import AboutStack from "../../../container/About/StackNavigator/index";
import CompetitionStack from "../../../container/Competition/Stack/index";
import NewsStack from "../../../container/News/Stack/index";
import constants from "../../../constants/variable";
import IOSIcon from "react-native-vector-icons/Ionicons";

const drawer = createDrawerNavigator(
  {
    News: NewsStack,
    AllCompetition: {
      screen: CompetitionStack,
      navigationOptions: ({ navigation }) => ({
        title: "About",
        headerBackTitle: null
      })
    },
    About: AboutStack
  },
  {
    contentComponent: SideBar,
    initialRouteName: "News"
  }
);

function mapStateToProps(state) {
  return {
    competition: state.competition
  }
}

export default connect(mapStateToProps)(drawer)