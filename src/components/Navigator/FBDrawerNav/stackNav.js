import React from "react"
import {createStackNavigator} from "react-navigation"
import Drawer from "./indexDrawer"
import Login from "../../../container/Login/index";
import Splash from "../../../container/Splash/index";
import {connect} from "react-redux"

const stack = createStackNavigator({
    Splash: {
        screen: Splash
    },
    Login:{
        screen: Login
    },
    Drawer:{
        screen: Drawer
    }
},{
  headerMode: "none",
  initialRouteName: "Splash"
});

export default connect()(stack);
