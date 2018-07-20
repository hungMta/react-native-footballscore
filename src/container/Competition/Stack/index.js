import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createStackNavigator } from "react-navigation";
import AllCompetition from "./AllCompetition/index";
import CompetitionTab from "./CompetitionTab/index";
import FixtureDetail from "./FixtureDetail/index";
import TeamDetail from "./Team/index";
import PlayerDetail from "./Player/index";
import constants from "../../../constants/variable";
import IOSIcon from "react-native-vector-icons/Ionicons";

export default createStackNavigator(
  {
    AllCompetition: {
      screen: AllCompetition,
      navigationOptions: ({ navigation }) => ({
        title: "Competitions",
        headerStyle: {
          backgroundColor: constants.primaryDarkColor
        },
        headerTitleStyle: {
          color: "white"
        },
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <IOSIcon
              name="ios-menu"
              size={30}
              color="white"
              style={{ margin: 5 }}
            />
          </TouchableOpacity>
        )
      })
    },
    ComeptitionTab: {
      screen: CompetitionTab,
      navigationOptions: ({ navigation }) => ({
        title: navigation.getParam("title", "null"),
        headerStyle: {
          backgroundColor: constants.primaryDarkColor
        },
        headerTintColor: "white"
      })
    },
    FixtureDetail: {
      screen: FixtureDetail,
      navigationOptions: ({ navigation }) => ({
        title: navigation.getParam("title", "null"),
        headerStyle: {
          backgroundColor: constants.primaryDarkColor
        },
        headerTintColor: "white"
      })
    },
    TeamDetail: {
      screen: TeamDetail,
      navigationOptions: ({ navigation }) => ({
        title: navigation.getParam("title", "null"),
        headerStyle: {
          backgroundColor: constants.primaryDarkColor
        },
        headerTintColor: "white"
      })
    },
    PlayerDetail: {
      screen: PlayerDetail,
      navigationOptions: ({ navigation }) => ({
        title: navigation.getParam("title", "null"),
        headerStyle: {
          backgroundColor: constants.primaryDarkColor
        },
        headerTintColor: "white"
      })
    }
  },
  {
    headerMode: "screen"
  }
);
