import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { createStackNavigator, DrawerActions } from "react-navigation";
import HomeScreen from "../screen/homescreen/HomeScreen";
import NewsScreen from "../screen/homescreen/NewsDetailScreen";
import IOSIcon from "react-native-vector-icons/Ionicons";

export default createStackNavigator(
  {
    news: {
      screen: NewsScreen,
      navigationOptions: () => ({
        title: "News",
        headerStyle: { paddingRight: 10, paddingLeft: 10, backgroundColor: '#334562' },
        headerTintColor: 'white'
      })
    },
    home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Home",
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <IOSIcon name="ios-menu" size={30} color="white" />
          </TouchableOpacity>
        ),
        headerStyle: { paddingRight: 10, paddingLeft: 10, backgroundColor: '#334562' },
        headerTintColor: 'white'
      })
      
    }
  },
  {
    initialRouteName: "home"
  }
);
