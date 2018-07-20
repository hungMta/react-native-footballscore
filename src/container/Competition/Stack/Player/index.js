import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

class Player extends Component {
  render() {
    return (
      <View style={{ justifyContent: "center" }}>
        <Text>Player</Text>
      </View>
    );
  }
}

export default Player;
