import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import News from "../../News/index";
import Competition from "../../Competition/StackNavigation/index";

export default createBottomTabNavigator({
  News: {
    screen: News
  },
  Competition: {
    screen: Competition
  }
});
