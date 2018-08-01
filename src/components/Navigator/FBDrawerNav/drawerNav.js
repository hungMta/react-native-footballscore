import React, { Component } from "react";
import { View } from "react-native";
import { createDrawerNavigator } from "react-navigation";
import { connect } from "react-redux";
import SideBar from "./SideBar/sideBar";
import AboutStack from "../../../container/About/StackNavigator/index";
import CompetitionStack from "../../../container/Competition/Stack/index";
import NewsStack from "../../../container/News/Stack/index";
import NewsWrapper from "../../../container/News/NewsWrapper";
import constants from "../../../constants/variable";
import IOSIcon from "react-native-vector-icons/Ionicons";
import Login from "../../../container/Login/index";
import Splash from "../../../container/Splash/index";

const drawer = createDrawerNavigator(
  {
    News: {
      screen: NewsStack
    },
    AllCompetition: {
      screen: CompetitionStack,
      navigationOptions: ({ navigation }) => ({
        title: "About",
        headerBackTitle: null
      })
    },
    About: AboutStack,
    Login: {
      screen: Login,
      navigationOptions: () => ({
        header: null
      })
    },
    Splash: {
      screen: Splash,
      navigationOptions: () => ({
        header: null
      })
    }
  },
  {
    contentComponent: SideBar,
    initialRouteName: "Splash"
  }
);

function mapStateToProps(state) {
  return {
    competition: state.competition
  };
}

export default connect()(drawer);
