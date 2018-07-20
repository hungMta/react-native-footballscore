import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { createBottomTabNavigator } from "react-navigation";
import Fixtures from "./Fixtures/index";
import LeagueTable from "./LeagueTable/index";
import constants from "../../../../constants/variable";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome"

export default createBottomTabNavigator(
  {
    Fixtures: {
      screen: Fixtures,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => (
          <EntypoIcon name="game-controller" color={tintColor} size={24} />
        )
      })
    },
    LeagueTable: {
      screen: LeagueTable,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="table" color={tintColor} size={24} />
        )
      })
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray",
      labelStyle: {
        fontSize: 12
      },
      style: {
        backgroundColor: constants.primaryDarkColor
      }
      // tabBarIcon: ({focused, tintColor}) => ({

      // })
    }
  }
);
