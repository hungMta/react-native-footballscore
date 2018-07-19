import React from "react";
import { TouchableOpacity } from "react-native";
import { createStackNavigator } from "react-navigation";
import AllCompetition from "../AllCompetition/index";
import Competition from "../StackNavigation/index";
import constants from "../../../constants/variable"
import IOSIcon from "react-native-vector-icons/Ionicons"
import { connect } from "react-redux";

export default createStackNavigator(
  {
    AllCompetition: {
      screen: AllCompetition,
      navigationOptions: ({ navigation }) => ({
        title: "Competition",
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
    Competition: {
      screen: Competition,
      navigationOptions: ({ navigation }) => ({
        title: "Competition",
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
    }
  },
  {
    initialRouteName: "AllCompetition"
  }
);
