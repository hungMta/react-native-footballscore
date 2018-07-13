import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { createStackNavigator } from "react-navigation";
import IOSIcon from "react-native-vector-icons/Ionicons";
import TabNav from "../screen/myTabNavigator/MyTabNavigator";
import WC from "../screen/competition/WoldCupCompetition";

export default createStackNavigator(
  {
    Competition: {
      screen: WC,
      navigationOptions: ({ navigation }) => ({
        title: "World Cup 2018",
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <IOSIcon name="ios-menu" size={30} color="white" />
          </TouchableOpacity>
        ),
        headerStyle: {
          paddingRight: 10,
          paddingLeft: 10,
          backgroundColor: "#334562"
        },
        headerTintColor: "white"
      })
    },
    
  },
  {
    initialRouteName: "Competition",
    // initialRouteParams: {
    //   id: 2000,
    //   competition: {
    //     id: 2000,
    //     area: {
    //       id: 2267,
    //       name: "World"
    //     },
    //     name: "FIFA World Cup",
    //     code: null,
    //     plan: "TIER_ONE",
    //     currentSeason: {
    //       id: 1,
    //       startDate: "2018-06-14",
    //       endDate: "2018-07-15",
    //       currentMatchday: 3
    //     },
    //     numberOfAvailableSeasons: 1,
    //     lastUpdated: "2018-06-04T00:02:58Z"
    //   }
    // }
  }
);
