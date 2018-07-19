import React from "react"
import {createStackNavigator} from "react-navigation"
import MainTab from "./TabNav/index"

export default createStackNavigator({
    tab: {
        screen: MainTab
    }
})