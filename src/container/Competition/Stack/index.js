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
import { connect } from "react-redux";

export const SCREEN_ALL_COMPETION = "AllCompetition";
export const SCREEN_COMPETITION_TAB = "ComeptitionTab";
export const SCREEN_FIXTURE_DETAIL = "FixtureDetail";
export const SCREEN_TEAM_DETAIL = "TeamDetail";
export const SCREEN_PLAYER_DETAIL = "PlayerDetail";

const stack = createStackNavigator(
  {
    AllCompetition: {
      screen: AllCompetition,
      navigationOptions: ({ navigation }) => ({
        title: "Competitions",
        headerBackTitle: null,
        headerStyle: {
          backgroundColor: constants.primaryDarkColor
        },
        headerTitleStyle: {
          color: "white"
        },
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.openDrawer()} style={{width: 60, justifyContent:"center", alignItems:"center"}}>
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
        title: navigation.getParam("competition", null).caption,
        headerStyle: {
          backgroundColor: constants.primaryDarkColor
        },
        headerTintColor: "white",
        headerBackTitle: null
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
    // headerMode: "screen",
    headerBackTitleVisible: false
  }
);

// function mapStateToProps(state) {
//   return {
//     competition: state.competition
//   };
// }

export default stack;
