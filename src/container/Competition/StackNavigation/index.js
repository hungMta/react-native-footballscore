import React from "react";
import { createStackNavigator } from "react-navigation";
import FixtureDetail from "./FixtureDetail/index";
import Player from "./Player/index";
import Team from "./Team/index";
import TabNav from "./TabNavigation/index";
import { connect } from "react-redux";

export default createStackNavigator(
  {
    Competition: {
      screen: TabNav
    },
    FixtureDetail: {
      screen: FixtureDetail
    },
    Player: {
      screen: Player
    },
    Team: {
      screen: Team
    }
  },
  {
    initialRouteName: "Competition"
  }
);
