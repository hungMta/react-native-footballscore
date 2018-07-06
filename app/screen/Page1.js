/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {DrawerActions} from 'react-navigation'
import Header from '../drawer_navigation/header'
class Page1 extends Component {
  render () {
    return (
      <View>
      <Header {...this.props} />
        <Text>
          Page1
        </Text>
        <TouchableOpacity
          onPress = {() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())} >
        <Text>
          click me
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Page1;
