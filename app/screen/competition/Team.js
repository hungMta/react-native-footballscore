import React from 'react';
import { Button, Text, View } from 'react-native';
import Header from "../../drawer_navigation/header";

export default class Team extends React.Component {
    render() {
      return (
        <View>
        {/* <Header {...this.props} title="WorldCup 2018" /> */}
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Match!</Text>
        </View>
      </View>
      );
    }
  }
  