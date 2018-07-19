import React, { Component } from "react";
import { View } from "react-native";
import { createDrawerNavigator } from "react-navigation";
// import TabNavIndex from "../FBTab/index";
// import StackNav from "../FBStackNav/index";
import { connect } from "react-redux";
import SideBar from "./SideBar/sideBar";
import About from "../../../container/About/StackNavigator/index";
import Competition from "../../../container/Competition/nav/index";
import News from "../../../container/News/Nav/NewsNavigation/index";
import MainContainer from "../../../container/StackNavigator/index";

export default createDrawerNavigator(
  {
    News: News,
    AllCompetition: {
      screen: Competition,
    },
    About: About
  },
  {
    contentComponent: SideBar,
    initialRouteName: "News"
  }
);
