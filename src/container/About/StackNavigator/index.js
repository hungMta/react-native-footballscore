import React from "react";
import {TouchableOpacity} from "react-native"
import { createStackNavigator } from "react-navigation";
import About from "../index";
import constants from "../../../constants/variable";
import IOSIcon from "react-native-vector-icons/Ionicons"

export default createStackNavigator(
  {
    About: {
      screen: About,
      navigationOptions: ({ navigation }) => ({   
        title: "About",
        headerStyle: {
          backgroundColor: constants.primaryDarkColor
        },
        headerTitleStyle: {
          color: "white"
        },
        headerLeft: (
            <TouchableOpacity onPress={() => navigation.openDrawer()} style={{width: 60, justifyContent:"center", alignItems:"center"}}>
              <IOSIcon name="ios-menu" size={30} color="white" style={{margin: 5}} />
            </TouchableOpacity>
          ),
      })
    }
  },
  {}
);
