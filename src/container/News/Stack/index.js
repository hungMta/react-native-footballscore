import React from "react";
import { TouchableOpacity } from "react-native";
import { createStackNavigator } from "react-navigation";
import News from "./News/index";
import NewsDetail from "./NewsDetail/index";
import constants from "../../../constants/variable";
import IOSIcon from "react-native-vector-icons/Ionicons";

export default createStackNavigator({
  News: {
    screen: News,
    navigationOptions: ({ navigation }) => ({
      title: "News",
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
      ),
      headerBackTitle: null,
      headerTintColor: "white"
    })
  },
  NewsDetail: {
    screen: NewsDetail,
    navigationOptions: ({ navigation }) => ({
      title: "News",
      headerStyle: {
        backgroundColor: constants.primaryDarkColor
      },
      headerTitleStyle: {
        color: "white"
      },
      headerTintColor: "white"
    })
  }
});
