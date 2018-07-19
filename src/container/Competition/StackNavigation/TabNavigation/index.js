import React, { Component } from "react";
import { createBottomTabNavigator } from "react-navigation";
import Fixtures from "./Fixtures/index";
import LeagueTable from "./LeagueTable/index";
import { connect } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons"

export default createBottomTabNavigator(
  {
    Fixtures: {
      screen: Fixtures
    },
    LeagueTable: {
      screen: LeagueTable
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = `newsletter`;
        } else if (routeName === "Champion") {
          iconName = `ios-football`;
        }
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return (
          <Ionicons
            name={iconName}
            size={25}
            color={focused ? tintColor : "gray"}
          />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);
