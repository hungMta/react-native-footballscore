import React from 'react';
import { Button, Text, View } from 'react-native';
import { TabNavigator, TabBarBottom, createTabNavigator, createMaterialTopTabNavigator,createBottomTabNavigator } from 'react-navigation'; // Version can be
import Match from '../competition/Match'
import Standing from '../competition/Standings'
import Team from '../competition/Team'

export default createMaterialTopTabNavigator(
    {
        Match: {
            screen: Match
        },
        Standing: {
            screen: Standing
        },
        Team: {
            screen: Team
        }
    },{
        tabBarOptions:{
            style: {
                backgroundColor: "#334562"
            },
            indicatorStyle:{
                height: 1,
                backgroundColor: "#dbd9d9"
            },
        },
        lazyLoad: false
    }
);